# Build a server

You’ve been using Docker for a while now, but you’ve only been using it as a client. That’s only half the fun. The other big thing with Docker is the ability to **build** your image.

### Concept

You may be wondering how the images you get online, like `nginx` are made. It all comes down to the use of a **Dockerfile:** a simple text file that stores instructions that will be executed to get a final output that will be an image you can use on your computer.

![](https://miro.medium.com/max/1200/1*p8k1b2DZTQEW_yf0hYniXw.png)

To create a Dockerfile, you simply need to do this: **Create a file named `Dockerfile`**, with no extension at the end. You can only have one Dockerfile per directory, so be careful.

### Usage

Here’s the basic structure of a Dockerfile.

```docker
FROM ubuntu:latest

WORKDIR /app

RUN apt update -y && apt upgrade -y

CMD echo "Hello!"
```

Let’s go line by line here :

The very first line will ALWAYS be the base image. With the keyword **FROM**, followed by `{imageName}:{version}`. For example, if you wanted to use the `golang` image but with a specific version, you could have written `FROM golang:latest`. `latest` version tag will always download and use the lastest version available.

The other lines in a Dockerfile are options that you can execute before launching the container.

- **WORKDIR** will tell Docker that all other actions following this line will be done in the specified folder. If you want to use a file in a specific folder, make sure you are in the right folder by using **WORKDIR**.
- **RUN** will simply execute a command. RUN commands are executed from top to bottom. It is common practice to make sure the container is up to date, so we’re using `apt` to do that. Make sure your commands don’t ask for any user input, as this will result in your build failing.
- **CMD** is the final command of the final. The instruction is executed shortly after the container is run, and it’s meant to be used as a default action for a container.

### Arguments

Here are a few instructions that you will use pretty often.

- **ENV** allows you to set environment variables inside your containers. For example, if you have a script that uses the variable $URI, you can use the instruction `ENV URI=blabla` as a variable.
- **EXPOSE** will inform Docker of the used port by the container. It **does not** actually open the port, you will still need to open it at runtime.
- **ADD** will simply copy files and folders exactly like COPY. The main difference is that it supports extra things like local-only tar extraction and remote URL support.

### Build it

The command used to build a Dockerfile is `docker build {path}`. Here are a few arguments that you will often use :

- `-f` is used to specify the name of the Dockerfile you want to use, in case it is not called Dockerfile. Keep in mind that having multiple Dockerfiles in the same directory is not a good practice.
- `-t` allows you to tag the image, basically giving it a name.
- `--label` sets the metadata for an image
- `--no-cache` can save you from a few issues if building your image doesn’t work right away.
- `--build-arg` is the same as the **ENV** instruction. It allows you to define variables at build time.

Try it! Create a new directory, save the example in a `Dockerfile`, run `docker build .` then `docker run {imageName}` and watch the output.

# Instructions

- Create a folder `build-a-server` and a custom HTML file named `index.html`. Put anything you want inside, just make sure this looks like a proper web page
- Create a `nginx.conf` that uses the default NGINX configuration* and adds a server block that listens to port 8080 and has a root as `/usr/share/nginx/html`.
- Create a Dockerfile that uses the `nginx` official image as a base
- Use the right instructions so that the `nginx` container listens on port 8080, and uses your custom index.html and nginx.conf files
- Push your folder with the HTML file, the config file and your Dockerfile inside

> \*You can get the default NGINX configuration online or you can copy it quickly from a container

# Expected results

- Successfully building the image should print something like this in your terminal:
  ```bash
  Successfully built 7938d1faa148
  Successfully tagged build-a-server:latest
  ```
- You should have these files in your directory:

![https://i.imgur.com/ybuhncL.png](https://i.imgur.com/ybuhncL.png)

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker build : [https://docs.docker.com/engine/reference/commandline/build/](https://docs.docker.com/engine/reference/commandline/build/)

> Dockerfile : [https://docs.docker.com/engine/reference/builder/](https://docs.docker.com/engine/reference/builder/)
