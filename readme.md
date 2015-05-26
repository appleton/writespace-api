# Setup

* Install couchdb

```sh
brew install couchdb
```

* Use the couchdb config from this repo and restart couch:

```sh
$ cd scribly-api
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

* (Bonus) You can see the state of the database by visiting `http://localhost:5984/_utils/` and signing in as your admin user. This signin is shared with the scribly app (which you can't sign into as admin) so make sure you do it in an incognito window.

## Notes for Andy which don't really matter

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

## Access production Couchdb admin
`ssh -NL 49001:localhost:49001 notesy.do`
`open localhost:49001/_utils`

