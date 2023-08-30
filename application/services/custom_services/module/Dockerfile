FROM node:20.2-alpine
COPY . /module
WORKDIR /module
RUN npm install
RUN npm i -g ts-node
CMD npm run prod