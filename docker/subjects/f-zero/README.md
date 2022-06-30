# F-Zero 🎆

### CPU Architectures

You may have heard of the new Apple Silicon M1 chips released, and you may even be using one right now. Referred to as Mac M1 _(or even M2)_ for short, these chips are based on a new processor architecture. “What does this mean exactly?” you may ask. Well, this has a lot of advantages but also some caveats.

### x86

What we call an **Instruction set architecture (ISA)** is a list of instructions that a CPU can use to function. In short, your typical CPU may know something like hundreds of words that it can interpret and use to work with your programs. The instruction set that 95% of PC today are using is the famous **x86,** that is born from the Intel 8086 microprocessor.

### ARM

Now, it is obvious that different ISAs exist. The most popular one is x86, but there is another one that came out just a decade ago that you use every day: **ARM.** This one powers all your phones and smaller low power devices, as well as the recent Mac M1 we talked about. But how does it differ?

![CPU architectures](https://i.imgur.com/KtFU7IO.png)

Think of the x86 as the French language: it is extremely complex, with many words and lots of styles. As such, you can make complex and powerful sentences. This language has evolved during the years, and you can now do beautiful things with it.

Now think of ARM as the English language: practically no conjugation and fewer words needed to make a sentence. This makes the language much easier to use, and as such, more powerful! But you are limited with the words you can use.

It is this exact tradeoff that makes the new M1/M2 chips powerful: as you need less “words” to execute operations, you can do them faster. But as the ARM architecture was initially designed for mobile devices, Apple had to adapt it to use them on their platform.

### What about Docker ?

Okay, less theory and more practice. The reason why we talked about all this is simple: as time passes, more and more devices use the ARM architecture, and **the images you build with `docker build` are incompatible with it**.

Fortunately, there is a solution. In 2019, the Docker team improved their solution and released the **BuildX** feature to build your images for other architectures.

### BuildX

If you have the latest version of Docker, experimental features should be enabled by default. If not, then [head there to enable them](https://docs.docker.com/buildx/working-with-buildx/).

Use `docker buildx ls` to list the available builders. For now, you should only have the default builder:

```bash
$ docker buildx ls
NAME/NODE       DRIVER/ENDPOINT STATUS  PLATFORMS
default *       docker
  default       default         running linux/amd64, linux/arm64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
```

We need a new builder. To create one, use:

```bash
docker buildx create --name mybuilder

$ docker buildx ls
NAME/NODE       DRIVER/ENDPOINT                STATUS   PLATFORMS
mybuilder       docker-container
  mybuilder0    npipe:////./pipe/docker_engine inactive
default *       docker
  default       default                        running  linux/amd64, linux/arm64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
```

Now our builder is created, but not running, and no platform is associated. You can manually assign platforms to use, but using these commands will allow you to build for all the available architectures:

```bash
$ docker buildx use mybuilder
$ docker buildx inspect --bootstrap
[+] Building 7.8s (1/1) FINISHED
 => [internal] booting buildkit                                                                                    7.8s
 => => pulling image moby/buildkit:buildx-stable-1                                                                 6.6s
 => => creating container buildx_buildkit_mybuilder0                                                               1.2s
Name:   mybuilder
Driver: docker-container

Nodes:
Name:      mybuilder0
Endpoint:  npipe:////./pipe/docker_engine
Status:    running
Platforms: linux/amd64, linux/amd64/v2, linux/amd64/v3, linux/arm64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/mips64le, linux/mips64, linux/arm/v7, linux/arm/v6
```

As you can see, ARM is listed among all the other platforms. Great! We can now build for multiple platforms and, if we wanted, push our platform online.

To build, use `docker buildx build {ARGS} .`. ARGS can be:

- Use `-t` as usual if you wish to name your image
- Use `--platform` to select specific platforms like `--platform linux/amd64,linux/arm64`
- Use `push` to immediately push your image to DockerHub.

_Obviously you need a Dockerfile for that part_

# Instruction

- Create a simple Dockerfile in the `f-zero` folder that uses the image `almalinux` and updates the system (hint: the package manager used is _dnf_)
  - At the end of the Dockerfile, use `echo "Hey I'm using "$(uname -m)"!”` as **CMD**
- Refer to the above instructions to build this image for the **amd64** and **arm64** platforms
  - Name your builder `blue-falcon`
  - Name your image `captain-falcon`

> **Important note**: you are free to create a DockerHub account to push your image online, but this is not taken into account for the exercise. If not pushed, the image will stay in cache, and you can’t use it locally

- Push your Dockerfile and `f-zero.sh` containing the commands you used to build. The file should contain three commands at most

# Expected result

You should see something like this in your terminal along with more text:

```bash
[+] Building 34.1s (12/12) FINISHED
 => [internal] booting buildkit                                                                                                                  9.6s
 => => pulling image moby/buildkit:buildx-stable-1                                                                                               8.9s
 => => creating container buildx_buildkit_affectionate_ishizaka0                                                                                 0.7s
 => [internal] load build definition from Dockerfile                                                                                             0.0s
 => => transferring dockerfile: 117B                                                                                                             0.0s
 => [internal] load .dockerignore                                                                                                                0.0s
 => => transferring context: 2B
```

# Notions

> Docker BuildX: [https://docs.docker.com/buildx/working-with-buildx/](https://docs.docker.com/buildx/working-with-buildx/)

> DockerHub: [https://hub.docker.com/](https://hub.docker.com/)
