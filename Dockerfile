FROM ruby:2-alpine

WORKDIR /usr/src/app

RUN apk update
RUN apk add build-base 

COPY Gemfile Gemfile.lock ./
RUN bundle install

CMD jekyll serve --incremental --watch -H 0.0.0.0 -P 4000 --force_polling