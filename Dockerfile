FROM node:14.15.1
MAINTAINER erickespinozat@hotmail.com

RUN apt-get update && apt-get install -y wget telnet vim nano 

WORKDIR /home/node/app

COPY package.json ./

COPY tsconfig.json ./

RUN npm install
RUN npm install -g pm2 typescript
RUN npm run build

COPY ./dist .

EXPOSE 3000

USER node
CMD ["pm2-runtime", "dist/src/index.js"]
