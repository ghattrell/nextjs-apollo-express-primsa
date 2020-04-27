FROM node:10-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY . /app


CMD [ "npm", "run", "dev" ]