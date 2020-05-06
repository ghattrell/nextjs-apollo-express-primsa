FROM node:latest

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY . /app

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]