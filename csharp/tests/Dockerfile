FROM mcr.microsoft.com/dotnet/sdk:6.0 as build

WORKDIR /setup

COPY setup/. .

RUN ./setup.sh

FROM build

WORKDIR /app

COPY . .

RUN rm -rf setup

ENTRYPOINT ["/app/entrypoint.sh"]

# WSH