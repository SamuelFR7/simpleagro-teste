FROM node:20.16.0-slim as base

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp openssl pkg-config python-is-python3

COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

COPY --link prisma .
RUN npx prisma generate

COPY --link . .

RUN npm run build

FROM base

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y openssl && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

COPY --from=build /app /app

EXPOSE 3000
CMD [ "npm", "run", "start" ]
