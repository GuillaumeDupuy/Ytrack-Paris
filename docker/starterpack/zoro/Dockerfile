FROM alpine:3.15

RUN apk add --update bash curl && rm -rf /var/cache/apk/*

COPY . /app

WORKDIR /app

ENTRYPOINT ["sh", "/app/entrypoint.sh"]
