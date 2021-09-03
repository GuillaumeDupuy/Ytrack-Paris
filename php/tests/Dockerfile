FROM php:8.0.3

WORKDIR /app

COPY composer.json .

COPY . .

RUN ["chmod", "+x", "/app/entrypoint.sh"]
ENTRYPOINT ["/app/entrypoint.sh"]

