Docker (not required for dev):

## Build
1. couchdb: `docker build ./db/ notesycouch`
2. node app: `docker build . notesyapp`

## Run in docker containers
1. Start couchdb: `docker run -d -v ~/couchdb:/usr/local/var/lib/couchdb -p 49001:5984 notesycouch`
2. Start node app: `docker run -link NAME_OF_COUCH_CONTAINER:db -p 49000:8080 notesyapp`
3. (Optional) start nginx: `sudo nginx -c /Users/username/projects/notesy-ng/nginx.conf`

NB: if using nginx, you'll need to add this to your /etc/hosts:

    127.0.0.1 app.notesy.co
    127.0.0.1 db.notesy.co

## Stop
1. Kill couch: `docker stop couch`
2. Kill nginx: `sudo nginx stop`

