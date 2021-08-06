FROM node:12.21.0-alpine3.11

ENV APP_NAME bookshelf
ENV RAILS_ROOT /srv/www/${APP_NAME}
RUN mkdir -p $RAILS_ROOT && \
    mkdir -p $RAILS_ROOT/tmp/pids

WORKDIR ${RAILS_ROOT}

COPY . .

RUN yarn && \
    yarn cache clean --all

CMD yarn dev