FROM node:16-alpine3.11

RUN mkdir /app
WORKDIR /app
EXPOSE 3000

COPY . /app/

RUN yarn

CMD ["yarn", "start"]
