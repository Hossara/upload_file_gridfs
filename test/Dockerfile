FROM node:18

RUN yarn global add pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD pnpm test