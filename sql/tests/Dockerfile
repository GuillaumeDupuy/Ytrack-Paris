FROM node:14.15.5-stretch-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]

# test
