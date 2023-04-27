FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g pm2 typescript
USER node

RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "dist/src/index.js"]