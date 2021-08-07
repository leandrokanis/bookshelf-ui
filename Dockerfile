FROM node:12.21.0-alpine3.11

ENV APP_NAME bookshelf
ENV ROOT /srv/www/${APP_NAME}
RUN mkdir -p $ROOT && \
    mkdir -p $ROOT/tmp/pids

WORKDIR ${ROOT}

COPY . .

RUN yarn && \
    yarn cache clean --all

CMD yarn dev