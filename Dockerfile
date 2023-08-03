FROM node:alpine

WORKDIR /app

EXPOSE 3019

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "build" ]