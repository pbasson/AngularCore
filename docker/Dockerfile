FROM node:alpine AS build

WORKDIR /project

COPY . /project

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]