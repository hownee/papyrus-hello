FROM node:23.5-alpine

WORKDIR /usr/src/app

ADD package.json package-lock.json ./
RUN npm install

ADD . .

EXPOSE 50051
CMD ["npm", "run", "start:dev"]