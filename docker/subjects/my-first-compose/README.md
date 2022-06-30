# Introduction to Docker Compose 🐳

Welcome to the second quest of this challenge! You will learn how to use Docker Compose and run multiple containers at the same time.

![Untitled](https://i.imgur.com/jbjSOUd.png)

# Setup

### 🟦 Windows

- If you were using Docker Desktop, `compose` is already installed on your system
- If you were using a virtual machine, refer to the instructions on your distro
- If you were using WSL2 (Linux Subsystem for Windows), refer to the **Ubuntu** section

As usual, using Docker Desktop's interface is **NOT** recommended for the exercices. The exercices are not meant to be used with a graphical manager.

### 🍎 Mac

Docker Desktop for Mac already includes Docker Compose, you’re good to go

### 🐧 Linux

### Ubuntu/Debian

Execute the following commands:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/2.6.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Arch Linux / Manjaro

Execute the following commands:

```bash
sudo pacman -Syu
sudo pacman -S docker-compose
```

### CentOS 7 / Rocky Linux

Execute the following commands:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/2.6.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### CentOS 8 / Fedora

Execute the following commands:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/2.6.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

---

### Principles of Compose

See how you can run an unlimited number of containers at the same time? This is exactly what Docker Compose allows you to do. With a single `YAML` file, you can create a number of containers, networks or volumes, and keep them running in the background.

![Untitled](https://miro.medium.com/max/900/1*CDkilA3HlFh4JUjPPkxh5A.png)

Docker Compose files are usually named `docker-compose.yml`. Like Dockerfiles, this is a convention and while you are not forced to call them this, it is better to follow the rules.

A Docker Compose file looks like this:

```yaml
---
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "8000:5000"
    volumes:
      - .:/app
      - volume01:/var/log
    networks:
	    - network1
  redis:
    image: redis
volumes:
  volume01: {}
```

Let’s go over this example bit by bit :

- The `version` line corresponds to the API version. It is now optional, but was mandatory before.
- **Services** are the containers you’re going to run. Here, we have two services : the `web` service and the `redis` service. Redis is an in-memory database.
- `web` :
  - The `build` line specifies a Dockerfile, instead of using a pre-made image. The path here is ., which is the current directory.
  - `ports` open ports when launching the container.
  - `volumes` works like the -v argument. You can specify volumes, either as a path or as a name you declared in a top-level instruction.
  - `networks` allows the web service to communicate with the redis service. That is, if both services are on the same network. Here, we can see that `web` is in network1 but not `redis`. This is a voluntary mistake.
- `redis` :
  - Here, the `redis` service uses a single image with no configuration or options.
- The `volumes` line allows you to list volumes and specify things like theif filesystems, their flags or their drivers. It is pointless if you only really need like one volume.

This here is just a small example of a Compose file. As for Dockerfiles, there are _many_ other options to specify.

### YAML

The YAML format, like the JSON format, is a human-readable format. It is easy to read and write and uses a key-value syntax. It requires to be properly indented, with a few necessities:

- While this is not mandatory, it is recommended to start your files with three dashes like in the example above.
- Usually, YAML files use 2 spaces for indentation, but 4 is accepted.
- Keys at the same level should stay at the same level, otherwise errors will happen
- A key can have multiple values, called "entries", starting with a simple dash, like in the example above.

For reference on how to write a proper YAML file, check the Notions at the bottom of the page.

# Instructions

- Create a folder `my-first-compose` along with a `docker-compose.yml` file inside it.
- Create a `hello_world` service that uses the Ubuntu image, and echoes ‘Hello World!’ when launched.
- Add an environment variable `CAMPUS` that is equal to `Bordeaux Ynov Campus`
- Push your work in your `((ROOT))` repo.

> _Make sure your files end with the `.yml` extension and not `.yaml`_

# Expected result

You should see this in your terminal:

```bash
[+] Running 1/0
 ⠿ Container my-first-compose-hello_world-1  Created                                                                                             0.1s
Attaching to my-first-compose-hello_world-1
my-first-compose-hello_world-1 exited with code 0
```

# Notions

> Docker Compose getting started : [https://docs.docker.com/compose/gettingstarted/](https://docs.docker.com/compose/gettingstarted/)

> Compose File reference : [https://docs.docker.com/compose/compose-file/](https://docs.docker.com/compose/compose-file/)

> YAML Usage in French : [https://geekflare.com/fr/yaml-introduction/](https://geekflare.com/fr/yaml-introduction/)
