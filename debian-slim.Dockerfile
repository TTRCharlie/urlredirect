FROM node:slim

COPY / /opt/app

WORKDIR /opt/app

RUN npm install

ENV PORT 8080
ENV URL https://example.com

EXPOSE $PORT

CMD npm start