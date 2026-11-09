# Design prototype image for the showcase.
# Built by CI into vibegitlab.rogii.com:63555/vibe/design-log-format-units:latest
# and served by Dokploy (project design-prototypes, memory 256 MB).

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
# Relative base so the bundle works at any mount point.
RUN pnpm exec vite build --base=./

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
