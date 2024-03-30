FROM node:20.12.0-alpine as builder

WORKDIR /app

RUN apk --no-cache add openssh g++ make python3 git

COPY package.json /app/
COPY pnpm-lock.yaml /app/

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

ADD . /app

RUN npm run build

# --------------------------------------------

FROM node:20.12.0-alpine

WORKDIR /app

COPY --from=builder /app/.output  /app/.output
COPY --from=builder /app/.nuxt  /app/.nuxt

EXPOSE 3001

ENTRYPOINT ["node", ".output/server/index.mjs"]
