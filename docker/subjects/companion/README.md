# Companion 💛

Compose always starts and stops containers in dependency order with keywords like `depends_on`, `links`, `volumes_from`, and `network_mode: "service:..."`. However, for startup, Compose does not wait until a container is ready. When you want a service to be ready before or after another service, you usually use your own code to check for the health of the service in question. But if you don’t need something too complex, you can just make services dependent on each others.

### Dependency

There are two keywords you can use if you want to “connect” services:

- `depends-on` is the simplest one:
  - with `docker-compose up`, services are started in dependency order.
  - `docker-compose up SERVICE`automatically includes `SERVICE`’s dependencies. This means that all depending services will be also run at the same time.
  - `docker-compose stop`stops services in dependency order.

Here is how you use `depends_on:`

```yaml
---
web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
```

- `links`is **DEPRECATED and should not be used**. It will be removed in future releases of Docker. Though it is worth mentioning.

# Instructions

- Create a `cube` and a `round` network
- Create a `cube-receptacle` service that is in the `cube` network and uses the image `postgres`
- Create a `edgeless-safety-cube-receptacle` service that is in the `round` network and uses the image `mysql`
- The `weighted-storage-cube` service:
  - Has to use the image `nginx`
  - Must be in the `cube` network
  - Must be dependent to `cube-receptacle`
- The `edgeless-safety-cube` service:
  - Has to use the image `debian`
  - Must be in the `round` network
  - Must be dependent to `edgeless-safety-cube-receptacle`
- You need to keep your `companion-cube` close. Create this service that:
  - Has to use the image `ubuntu`
  - Must be in the `cube` network
  - Must be dependent to `cube-receptacle`
- This time, you have to keep the containers alive with `tty: true`
- Make a service named `chell` with the image `busybox`, make it dependent on all the **cubes** services, and use a command to ping them by hostname, each of them twice (amounting to 6 pings total). Test that everything works correctly by only running the Chell service

> Tip : to use multiple commands, use `sh -c "command1 && command2"` operator between the commands

Just for your pleasure, here’s a look at all the cute cubes:

![https://i.imgur.com/75xl6YU.png](https://i.imgur.com/75xl6YU.png)

# Expected result

You should see this in your terminal:

```bash
[+] Running 6/5
 ⠿ Container companion-edgeless-safety-cube-receptacle-1  Created                                                                                0.0s
 ⠿ Container companion-cube-receptacle-1                  Created                                                                                0.0s
 ⠿ Container companion-edgeless-safety-cube-1             Created                                                                                0.0s
 ⠿ Container companion-weighted-storage-cube-1            Created                                                                                0.0s
 ⠿ Container companion-companion-cube-1                   Created                                                                                0.0s
 ⠿ Container companion-chell-1                            Created                                                                                0.0s
Attaching to companion-chell-1, companion-companion-cube-1, companion-cube-receptacle-1, companion-edgeless-safety-cube-1, companion-edgeless-safety-cube-receptacle-1, companion-weighted-storage-cube-1
companion-edgeless-safety-cube-receptacle-1  | 2022-06-20 14:32:07+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.0.29-1debian10 started.
```

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker Compose networking: [https://docs.docker.com/compose/networking/](https://docs.docker.com/compose/networking/)

> Usage of the ping command (man) : [https://linux.die.net/man/8/ping](https://linux.die.net/man/8/ping)

> Multiple commands with Compose : [https://stackoverflow.com/a/52641495](https://stackoverflow.com/a/52641495)
