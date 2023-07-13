FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli@16
RUN npm install

#COPY *.json *.ts *.js *.sh ./

COPY ./ /app

EXPOSE 4200
ENV NODE_ENV=development
