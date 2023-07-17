FROM node:16-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
COPY .env ./
RUN "npm" "install" "--production=false" "--frozen-lockfile"

COPY . .
RUN "npm" "run" "build"

FROM node:16-alpine AS production-dependencies
WORKDIR /app

COPY package.json package-lock.json ./
COPY .env ./
RUN "npm" "install" "--production=true" "--frozen-lockfile"

FROM node:16-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY package.json ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD "npm" "run" "start"