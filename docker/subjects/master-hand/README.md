# Master Hand

Great ! Now that you’ve discovered how you can add flags to containers, you’ve also seen the `--detached` flag that allows them to be run in the background. This means that the container lets you keep control of your terminal while still running on your computer.

But here’s a new question : where are my containers ?

### Foreground mode

By default, a container is running in foreground mode, which means it is waiting for input the moment you use the run command. The `node` image you ran exits immediately and doesn’t ask for any input because it is setup to only run a NodeJS app, and other images behave exactly the same. If you want to get into your container’s terminal, you have to set a command to use at the end of your `run` command.

For example : if you want to run a Debian image and get into the system to install things, you’ll have to use `docker run -it debian bash`. The `-i` flag keeps the standard input open to not kill the container immediately, and the `-t` flags allocates a TTY so you can use commands in the container. The `bash`\* at the end tells the container to open a bash command prompt when launched, combined with the TTY.

### Detached mode

A container running in detached mode is still running on your computer. If it is setup with an IP address, or a service is running on it, or anything like that, you can use it outside of your container.

For example : running a container with the `httpd` or `nginx` image will start a web server that will be accessible via your container IP (if setup properly), even in the background.

Use the `-td` flag to run the container in the background, with `-t` allocating a terminal to keep the container running and `-d` to run it in detached mode.

### Get back to it

You can get to any container running in the background via the `docker exec -it` command. `exec` executes a command inside the container, but does not let you inside the container right away. Using the `-it` flag, as explained before, opens a terminal inside the container, so you can use commands in the container.

\*with some images, `bash` may not be available and you will have to use `sh`.

### Where are my containers ?

Your containers are fine ! You can use `docker ps` to list running containers. The same goes for images : you can use `docker image ps`.

Obvisouly, there’s also a lot of flags associated with this command. Here are the flags you will use the most :

- `--all`, `-a` to list all containers, running or not
- `--last`, `-l` to show only the latest created container
- `--no-trunc` to show the full length IDs of the containers

### Manipulation

You are able to move files between your host machine and a container. For that, use the `docker cp` command to copy your file(s).

- If you want to copy from the container to your host (🐳→ 💻), use `docker cp {containerName}:/path/to/file /host/path/target`
- If you want to copy from the host to your container (💻→🐳), use `docker cp /path/to/file/from/host {containerName}:/path/to/container/target`

# Instructions

- Run a container in background with the `ubuntu` image and name it `final-destination`
- Update the system in the container
- Get into the container and install `wget`
- Head to [https://www.smashbros.com/fr_FR/](https://www.smashbros.com/fr_FR/) and download Kirby’s HTML page (fighter N°6)
- Rename the file to `kirby.html` and use the command `echo $(whoami) >> kirby.html`
- Get out of the container
- Copy the file from the container onto your host machine
  - If you are in a Virtual Machine, you will need to get the file on your host machine (you can use FTP or whatever you like to do that)
- Push both the `master-hand.sh` file containing the command you used to run your container and the HTML file to your Git

# Expected results

- You should see something like this with `docker ps`:

```bash
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS         PORTS     NAMES
58d14e54fd34   ubuntu    "bash"    10 seconds ago   Up 9 seconds             final-destination
```

- Using `docker cp` succesfully should not output anything to the console

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

> Docker ps : [https://docs.docker.com/engine/reference/commandline/ps/](https://docs.docker.com/engine/reference/commandline/ps/)

> Docker exec : [https://docs.docker.com/engine/reference/commandline/exec/](https://docs.docker.com/engine/reference/commandline/exec/)

> Docker cp : [https://docs.docker.com/engine/reference/commandline/cp/](https://docs.docker.com/engine/reference/commandline/cp/)
