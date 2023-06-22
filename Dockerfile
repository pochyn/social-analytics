FROM node:16-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN "npm" "install"

COPY . .
RUN "npm" "run" "build"

USER node

EXPOSE 3000

CMD "npm" "run" "start"