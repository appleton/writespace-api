# DOCKER-VERSION 0.8.0

FROM klaemo/couchdb

# CouchDB config
ADD local.ini /usr/local/etc/couchdb/

VOLUME /var/lib/couchdb

CMD ["/opt/start_couch"]
EXPOSE 5984
