FROM node:25.3-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json ./
RUN npm install

FROM deps AS build
COPY nuxt.config.ts tailwind.config.js tsconfig.json ./
COPY app ./app
COPY i18n ./i18n
COPY public ./public
RUN npm run build

FROM base AS production
ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /app/.output ./

EXPOSE 3000
CMD ["node", "./server/index.mjs"]
