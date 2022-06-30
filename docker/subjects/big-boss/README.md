# Big Boss

We have a big order coming in. You have to create a full Dockerfile, with lots of lines. While this serves no real purpose, you will learn everything you can put in a Dockerfile.

### ARG

While you can use `--build-arg` to add arguments at build, you can also add them in the Dockerfile with the **ARG** statement. It is the only statement that can be added _before_ the **FROM** statement.

```docker
ARG CODE_VERSION=latest
FROM node:${CODE_VERSION}
```

# Instructions

As you expected, you will need to create a `Dockerfile`:

- Add the argument **VERSION=1.19-rc-alpine**
- Use image `golang` with the version in argument
- Set two environment variables:
  - **DIRECTORY** to **“/webserver”**
  - **PORT** to **2022**
- **RUN** the _mkdir_ command to create the /webserver directory **USING the environment variable created before,** then set **$DIRECTORY** as **WORKDIR**
- Download and **COPY** or **ADD** [this file](https://raw.githubusercontent.com/Deytron/files/main/big-boss/index.html) to **$DIRECTORY**
- Use the following **RUN** commands:
  - `wget https://raw.githubusercontent.com/Deytron/files/main/big-boss/main.go`
  - `go mod init webserver`
  - `go get -u github.com/gin-gonic/gin`
- Add the following **LABELS**:
  - version='1.0'
  - description='A simple test of the Gin go framework'
- Expose port 2022
- With a health check:
  - Interval of 30 seconds
  - 3 retries
  - 30 seconds of timeout
  - With test command `curl -f http://localhost:2022/ || exit 1`
- Set the CMD to run the file _main.go_
- Push your Dockerfile and `index.html`

# Expected results

- You should get this in your terminal when runnig the container:

```bash
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:   export GIN_MODE=release
 - using code:  gin.SetMode(gin.ReleaseMode)

[GIN-debug] Loaded HTML Templates (2):
        -
        - index.html

[GIN-debug] GET    /                         --> main.main.func1 (3 handlers)
[GIN-debug] [WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.
Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.
[GIN-debug] Environment variable PORT="2022"
[GIN-debug] Listening and serving HTTP on :2022
```

- `localhost:2022` should be accessible and show a GIF

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

> Dockerfile reference: [https://docs.docker.com/compose/compose-file/compose-file-v3/](https://docs.docker.com/compose/compose-file/compose-file-v3/)
