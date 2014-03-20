# DOCKER-VERSION 0.8.0

FROM dockerfile/nodejs

# Node application
ADD . /app

ENV NODE_ENV production
ENV PORT 8080

# TODO: use linked containers http://docs.docker.io/en/latest/use/working_with_links_names/
# TODO: actual user and password
ENV COUCH_UP andy:asdfasdf

RUN cd /app; npm install
RUN cd /app; ./node_modules/gulp/bin/gulp.js build

ENTRYPOINT ["/app/env.sh"]

CMD ["node", "/app/index.js"]
EXPOSE 8080
