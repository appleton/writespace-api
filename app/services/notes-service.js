'use strict';

angular.module('notes.service', [
  'notes.resource'
]).factory('NotesService', [
  'NotesResource',
  function(NotesResource){
    var notes = [];

    // Private functions
    function findInCache(id) {
      return _.find(notes, { _id: id });
    }

    function removeFromCache(id) {
      return _.remove(notes, { _id: id });
    }

    function isTextUnchanged(id) {
      id = (id || '');
      return NotesResource.get(id).then(function(note) {
        return findInCache(id).text === note.text;
      });
    }

    function assignIfChanged(dest, src) {
      if (dest._rev === src._rev) return;
      isTextUnchanged(dest._id).then(function(isUnchanged) {
        console.log(isUnchanged);
        if (isUnchanged) delete src.text;
        return _.assign(dest, src);
      });
    }

    // Public functions
    function allDocs() {
      return NotesResource.allDocs({ include_docs: true }).then(function(resp) {
        _.each(_.pluck(resp.rows, 'doc'), function(newNote) {
          var existing = findInCache(newNote._id);

          if (existing) {
            assignIfChanged(existing, newNote);
          } else {
            notes.push(newNote);
          }
        });
        return notes;
      });
    }

    // TODO: reconsider full query and merge on every get?
    function get(id) {
      return allDocs().then(function() {
        return findInCache(id);
      });
    }

    function put(note) {
      // Only trigger a put if the text of the note is different to the text
      // in the database. This prevents a remote update from triggering an
      // immediate put with the same data.
      isTextUnchanged(note._id).then(function(isUnchanged) {
        if (isUnchanged) return;

        note.updatedAt = (new Date()).valueOf();
        NotesResource.put(note).then(function(resp) {
          note._rev = resp.rev;
        });
      });
    }

    function post(note) {
      note.createdAt = note.updatedAt = (new Date()).valueOf();
      return NotesResource.post(note).then(function(resp) {
        note._id = resp.id;
        note._rev = resp.rev;
        notes.push(note);
        return note;
      });
    }

    // Bootstrap
    NotesResource.changes({
      continuous: true,
      onChange: function(revision) {
        var existing = findInCache(revision.id) || {};
        var existingRev = existing._rev;
        var newRev = _.last(revision.changes).rev;

        // No need to update if we already have the same revision in memory
        if (existingRev === newRev) return;

        // Handle deletion
        if (existing && revision.deleted) return removeFromCache(revision.id);

        NotesResource.get(revision.id).then(function(newNote) {
          assignIfChanged(existing, newNote);
        });
      }
    });

    return {
      allDocs: allDocs,
      get: get,
      put: put,
      post: post
    };
  }
]);
