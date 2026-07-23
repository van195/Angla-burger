FROM node:22-alpine AS builder

RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

COPY package*.json ./

RUN chown -R app:app /app

USER app

RUN npm ci

COPY --chown=app:app . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

