#APP
FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN set -ex; \
    yarn install --no-cache --frozen-lockfile; \
    yarn cache clean;
CMD [ "yarn", "start" ]
EXPOSE 4106
#CLUSTER
