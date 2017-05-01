# Writespace API

*This is the server component of a side project which is now unmaintained. I'm leaving it here as an example of an Ember.js app which uses PouchDB and service workers to work offline.*

# Setup

* Install couchdb

```sh
brew install couchdb
```

* Use the couchdb config from this repo and restart couch:

```sh
$ cd writespace-api
$ cp db/local.ini /usr/local/etc/couchdb
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.couchdb.plist
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.couchdb.plist
```

* Set up a couchdb admin user ([docs](http://guide.couchdb.org/draft/security.html#users)):

```sh
$ curl -X PUT http://localhost:5984/_config/admins/YOUR_ADMIN_USERNAME -d '"YOUR ADMIN PASSWORD"'
```

* Configure your .env file:

```sh
$ echo COUCH_URL=http://YOUR_ADMIN_USER:YOUR_ADMIN_PASSWORD@localhost:5984 > .env
```

* Run the app!

```sh
$ npm install
$ npm start
```

* (Bonus) You can see the state of the database by visiting `http://localhost:5984/_utils/` and signing in as your admin user. This signin is shared with the writespace app (which you can't sign into as admin) so make sure you do it in an incognito window.

# Production

## Access production Couchdb admin
```sh
npm run db:utils
```
