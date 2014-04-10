#!/bin/sh

timestamp=`date +%Y-%m-%dT%H:%M:%S`
filename="couchdb-${timestamp}.tar"
filepath="/tmp/${filename}"

tar cvf $filepath /root/couchdb > /dev/null
gzip -9 $filepath
s3cmd put "${filepath}.gz" s3://notesy-db-backup
