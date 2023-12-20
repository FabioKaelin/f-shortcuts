# build stage
FROM node:19.5.0 as build-stage
LABEL org.opencontainers.image.source https://github.com/fabiokaelin/f-shortcuts
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.23.3 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
