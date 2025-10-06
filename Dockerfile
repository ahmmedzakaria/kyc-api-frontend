# frontend/Dockerfile
# build stage
FROM node:20-alpine AS builder
WORKDIR /app
ENV CI=true
COPY package.json package-lock.json ./
RUN npm ci
COPY angular.json tsconfig*.json ./
COPY src ./src
RUN npm run build -- --configuration=production

# production nginx stage
FROM nginx:1.26-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# custom nginx config - optional for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
