FROM node:lts-alpine AS builder

ARG service="gateway"

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update

# Set working directory
WORKDIR /app
RUN npm install -g turbo

COPY --chown=node:node . .

RUN turbo prune --scope=${service}

WORKDIR /app/out

RUN npm ci
RUN turbo run build

USER node

FROM node:lts-alpine AS runner

ARG service="gateway"
ARG port=3000

WORKDIR /app

# Don't run production as root
COPY --chown=node:node --from=builder /app/out/services/${service}/dist ./dist
COPY --chown=node:node --from=builder /app/out/node_modules ./node_modules

EXPOSE ${port}

USER node

CMD [ "node", "dist/main.js" ]