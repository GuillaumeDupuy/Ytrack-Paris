# Mugiwara 改

By default Compose sets up a single network for your app. Each container for a service joins the default network and is both reachable by other containers on that network. This means that all containers can communicate with each other, as if you don’t specify a network, they’re all in the default network.

For example, here is an extract of a `docker-compose.yml` file:

```yaml
web:
  ports:
    - "8000:8000"
db:
  ports:
    - "8001:5432"
```

Each container can now look up the hostname web or db and get back the appropriate container’s IP address. Keep in mind that the first port is the `HOST_PORT` and the second one is the `CONTAINER_PORT`. Applications inside a network talk to each other via the `CONTAINER_PORT`, the host port is used for other computers in the networks to join the container, for example `localhost:8000`.

### Custom networks

You can define and use networks other than the default one by using the top-level `networks` key. Once defined, these networks can be specified with the service-level `networks` key. For example:

```yaml
---
services:
  proxy:
    build: ./proxy
    networks:
      - frontend
  app:
    build: ./app
    networks:
      - frontend
      - backend
  db:
    image: postgres
    networks:
      - backend
networks:
  frontend:
    ipam:
      config:
        - subnet: 10.0.1.0/16
        gateway: 10.0.1.254
  backend: {}
```

Here, proxy and app can communicate with each other via `frontend`, app and db via `backend`, but proxy and db simply cannot communicate with each other.

You can also specify an IP address to use with the service:

```yaml
---
services:
  app:
    image: ubuntu
    networks:
      app_net:
        ipv4_address: 172.16.238.10
```

### Multiline instructions

You may get an error with YAML if what you write on a single line is too long. You have a limit 80 characters on a single line with YAML. To overcome this, you can use multiline instructions with **>** like this:
```yaml
command: >
  ls -l &&
  ls -al &&
  echo "I did multiple lines"
```

# Instructions

You may have Luffy and Zoro in your team, but you’re still missing like half of the crew. Time to get them back on board!

- First, create the following networks:
  - `grand-line`
    - Subnet: 172.16.0.0/16, Gateway: 172.16.0.254
  - `red-line`
    - Subnet: 172.16.1.0/16, Gateway: 172.16.1.254
  - `north-blue`
    - Subnet: 192.168.1.0/24, Gateway: 192.168.1.254
  - `south-blue`
    - Subnet: 192.168.2.0/24, Gateway: 192.168.2.254
  - `east-blue`
    - Subnet: 192.168.3.0/24, Gateway: 192.168.3.254
  - `west-blue`
    - Subnet: 192.168.4.0/24, Gateway: 192.168.4.254
- Then, set up the following services:
  - `nami`
  - `sanji`
  - `chopper`
  - `usopp`
  - `robin`
  - `brook`
  - `franky`
- Make it so that:
  - Nami is in the East Blue network, with an IP address of `192.168.3.66` and uses the `ubuntu` image, and can also ping Usopp with the command `apt update&& apt install iputils-ping -y && ping -c 4 usopp`
  - Sanji is in the North Blue network, with an IP address of `192.168.1.33` and uses the `node` image
  - Chopper is in the Grand Line network, with an IP address of `172.16.0.100` and uses the `golang` image
  - Usopp is in the East Blue network, with an IP address of `192.168.3.200` and uses the `debian` image
  - Robin is in the West Blue network, with an IP address of `192.168.4.130` and uses the `alpine\curl` image, and can also do ` curl 192.168.4.254 80``&& echo "Brook is here!" || echo "Where is Brook?" `
    - (_note_: the telnet utility may not be installed with ubuntu)
  - Brook is in the West Blue network, with an IP address of `192.168.4.83` and uses the `nginx` image, and has port 8080 open
  - Franky is in the South Blue network, with an IP address of `192.168.2.94` and uses the `redis` image
- If everything is done correctly, Nami and Usopp should be able to communicate, as well as Robin and Brook, while others should not.

> Pro tip: keep a container running with `command: tail -F anything`. What this does is run a command that searches for the file `anything` litterally, but it will never find it and always fail, thus we get an infinite loop and keep the container alive

# Expected result

You should see something like this in your terminal:

```bash
[+] Running 7/0
 ⠿ Container mugiwara-kai-nami-1     Created                                                                                                     0.0s
 ⠿ Container mugiwara-kai-sanji-1    Created                                                                                                     0.0s
 ⠿ Container mugiwara-kai-brook-1    Created                                                                                                     0.0s
 ⠿ Container mugiwara-kai-chopper-1  Created                                                                                                     0.0s
 ⠿ Container mugiwara-kai-franky-1   Recreated                                                                                                   0.0s
 ⠿ Container mugiwara-kai-robin-1    Recreated                                                                                                   0.0s
 ⠿ Container mugiwara-kai-usopp-1    Recreated                                                                                                   0.0s
Attaching to mugiwara-kai-brook-1, mugiwara-kai-chopper-1, mugiwara-kai-franky-1, mugiwara-kai-nami-1, mugiwara-kai-robin-1, mugiwara-kai-sanji-1, mugiwara-kai-usopp-1
mugiwara-kai-franky-1   | 1:C 20 Jun 2022 14:30:25.580 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
```

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker Compose networking: [https://docs.docker.com/compose/networking/](https://docs.docker.com/compose/networking/)
