FROM node:14-alpine AS deps
RUN apk --update add --no-cache curl git python3 alpine-sdk \
  bash autoconf libtool automake make g++ libc6-compat
RUN yarn add sodium-native

WORKDIR /admin
COPY package.json yarn.lock ./
# RUN yarn config set unsafe-perm true
RUN yarn install

# Rebuild the source code only when needed
FROM node:14-alpine AS builder
WORKDIR /admin
COPY . .
COPY --from=deps /admin/node_modules ./node_modules
ENV DATABASE_URL "postgresql://aiplus:!aiplus@@localhost:8060/aiplus"
RUN yarn rw dev

EXPOSE 3000

CMD ["yarn", "start"]