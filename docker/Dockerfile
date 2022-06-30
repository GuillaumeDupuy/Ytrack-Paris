FROM alpine:latest

RUN apk add --update bash yamllint libcap yq curl && rm -rf /var/cache/apk/*

WORKDIR /app

COPY . /app

ENTRYPOINT ["sh",  "/app/entrypoint.sh"]
