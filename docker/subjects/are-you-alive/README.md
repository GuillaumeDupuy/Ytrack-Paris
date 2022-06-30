# Are you alive?

Monitoring is important when it comes to services, and pretty much anything. You want to be aware of any malfunction in your infrastructure, and if a service dies, you want to be able to bring it back up as fast as possible.

While there are services that offer native monitoring for your network, Docker offers **healthchecks**. They differ by the fact that you don’t need a container running to watch a service.

### Health checks

You can declare a health check in two ways:

- In your **Dockerfile** with HEALTHCHECK
- As a property in your Compose file

Here it is used in a Dockerfile with multiple arguments:

```docker
FROM nginx:latest

HEALTHCHECK --interval=1m --timeout=30s --retries=3 CMD curl --fail http://localhost:2368 || exit 1
```

And here, in a Compose file:

```yaml
---
version: "3.9"
services:
  test:
    image: nginx
    ports:
      - 2368:2368
    healthcheck:
      test: ["CMD", "curl -f http://localhost:2368 || exit 1"]
      timeout: 30s
      interval: 1m
      retries: 3
      start_period: 2m
```

**test** is the command used to check if a service is alive, **timeout** will say that the service is dead after 30 seconds and after 3 **retries**, spaced by an **interval** of 1 minute. **start_period** means that the healthcheck will start after 2 minutes. All in all, if after 5:30 minutes since we started our service the NGINX server didn’t answer, Docker considers it as _unhealthy_.

You can use `docker ps` to see if a service is healthy or not:

```bash
CONTAINER ID   IMAGE    COMMAND    CREATED          STATUS                             PORTS                                                      NAMES
af4a79542104   nginx    27 seconds ago   Up 26 seconds (health: starting)   0.0.0.0:80->80/tcp, :::80->80/tcp   test/webserver
```

You can use the `docker inspect` command to check for the logs of your test command:

```json
$ docker inspect --format "{{json .State.Health }}" test/webserver | jq
{
  "Status": "healthy",
  "FailingStreak": 0,
  "Log": [
    {
      "Start": "2022-06-15T14:46:14.628067156+02:00",
      "End": "2022-06-15T14:46:14.773144709+02:00",
      "ExitCode": 0,
      "Output": "Server alive\n"
    }
  ]
}
```

### Restart

You can have a `restart` property in your service. `no` is the default [restart policy](https://docs.docker.com/config/containers/start-containers-automatically/#use-a-restart-policy), and it does not restart a container under any circumstance. When `always` is specified, the container always restarts. The `on-failure` policy restarts a container if the exit code indicates an on-failure error. `unless-stopped` always restarts a container, except when the container is stopped (manually or otherwise).

# Instructions

- Create a `minecraft-server` service:
  - Using the `itzg/minecraft-server` image
  - Listening on ports 25565
  - With **restart** set to `always`
  - With environment variable **EULA: TRUE**
  - With an attached console (`stdin_open: true`)
  - With a healthcheck checking the health of the service 5 times every 30 seconds, with a timeout of 15 seconds and a start period of 1 minute. The command you can use to test if the server is alive is a check of the error code like so:
    - `curl -s localhost:25565 > /dev/null; [ $$? -eq 1 ] && echo "Server alive" || echo "Server dead”`\*
      > Tip: use multiple line in YAML with **>**, like `test : > .....`

> \*Since we can’t simply curl with HTTP a Minecraft Server, error code 1 indicates an error, but it also means that our server is alive. Using a dedicated monitoring tool would be ideal.

# Expected result

Once the server is done starting, you should see something like this with `docker inspect`:

```json
{
  "Status": "healthy",
  "FailingStreak": 0,
  "Log": [
    {
      "Start": "2022-06-20T17:00:04.376198627+02:00",
      "End": "2022-06-20T17:00:04.696201718+02:00",
      "ExitCode": 0,
      "Output": "Server alive\n"
    }
  ]
}
```

# Notions

> Dockerfile reference: [https://docs.docker.com/engine/reference/builder/](https://docs.docker.com/engine/reference/builder/)

> Compose file reference: [https://docs.docker.com/compose/compose-file/](https://docs.docker.com/compose/compose-file/)

> Docker healthcheck: [https://www.grottedubarbu.fr/docker-healthcheck/](https://www.grottedubarbu.fr/docker-healthcheck/)

> Dockerfile HEALTHCHECK: [https://docs.docker.com/engine/reference/builder/#healthcheck](https://docs.docker.com/engine/reference/builder/#healthcheck)
