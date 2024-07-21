FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install --immutable

COPY . .

RUN yarn build

FROM nginx:1.21-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]