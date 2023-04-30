FROM node:alpine3.16

COPY / /opt/app

WORKDIR /opt/app

RUN npm install

ENV PORT=8080
ENV URL=https://example.com

EXPOSE 8080

CMD npm start