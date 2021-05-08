FROM node:14.16.1-alpine

LABEL maintainer="Enaho Murphy <<enahomurphy@gmail.com>>"

WORKDIR /var/www

COPY ./dist /var/www
ADD . /var/www

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN ["yarn", "install"]

CMD ["yarn", "start"]

EXPOSE 8081