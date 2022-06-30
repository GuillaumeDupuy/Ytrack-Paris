# Flags

See how you used `--name` to identify your container? This is called a flag. They can be used on every command you run in your command prompt, and they're not exclusive to Docker, though you may already know that. But here's something you may not know: some flags can be abbreviated. For example, `--detach` can be shortened as `-d`.

You can limit the number of resources a container can use with flags. For example, if your computer only has 4 GiB of RAM and you want to run multiple containers, you can limit each of them to something like 512 MB. RAM is obviously not the only resource you can limit.

# Instructions

Using only one command and the appropriate flags :

- Run a container with the `node` image
- Name it "mushroom-kingdom"
- Run it in detached mode, but...
- ...Allocate a pseudo TTY to it so it keeps running in background\*
- Limit it to **500MB** of RAM
- Disable the network
- Make it read-only so it cannot be modified
- Set its number of CPU cores to 2
- Set the environment variable BROTHER to "luigi"
- Set its hostname to "mario"
- Set the workdir in the container to `/srv`

> \*When running in the background with an existing TTY, you can access a container at any time with a command by using `docker exec -it {command}`. More info on that in the next exercise.

# Expected result

You should see something like this when using the command `docker stats`

```bash
CONTAINER ID   NAME               CPU %     MEM USAGE / LIMIT   MEM %     NET I/O   BLOCK I/O     PIDS
3b28a738d2fd   mushroom-kingdom   0.00%     16.5MiB / 500MiB    3.30%     0B / 0B   10.4MB / 0B   11
```

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)
