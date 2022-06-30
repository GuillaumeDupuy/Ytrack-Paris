# Link ⚔

The need to store data is everywhere. And as you may know, data are not stored in Docker, they are volatile, exactly like a computer’s RAM. But there is a way to save your files and your progression.

### Storage

See how you used `docker cp` to copy a file from the container to the host machine? This can be made autonomous. By default, all data stored in a container are volatile. When you delete it, everything that was stored in it is gone as well. But we can make some data persistent.

Docker has two main options to store files: _volumes_ and _bind mounts_. If you’re running Docker on Linux, you can also use a *tmpfs mount*. If you’re running Docker on Windows, you can also use a *named pipe*. Only _volumes_ and _bind mounts_ will be useful.

![Untitled](https://docs.docker.com/storage/images/types-of-mounts-volume.png)

**Volumes** are stored in a part of the host filesystem which is *managed by Docker.* They are the best way to persist data in Docker. While **Bind Mounts** can be stored _anywhere_ on the hostsystem. The big difference between the two is that bind mounts are older and more limited than volumes.

### Volumes

There are two ways to use volumes in Docker: either you create a volume on your host system before running any container, which means you can manage it and prepare multiple files to allocate to a container, or you can select a directory to create a volume exactly when you run a container. It's up to your preference and what you need to do.

To create a volume outside of any container, use `docker volume create {volumeName}`. This will create a named volume. To see where the volume has been created, use `docker volume inspect {volumeName}`. For example, with a volume named `my-volume` :

```bash
[
    {
        "CreatedAt": "2021-12-22T13:44:18+01:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/my-volume/_data",
        "Name": "my-volume",
        "Options": {},
        "Scope": "local"
    }
]
```

Here, we can see that `my-volume` is located at `/var/lib/docker/volumes/my-volume/_data`. If files are placed in this directory, when a container will be run with this volume set, the files will be available directly in the container.

> Keep in mind that on Linux, directories under `/var/lib` are usually only accessible as root. Hence, you should use a dummy container to sotre files in your volumes.

### Volume option

You can use the volumes you just created by running `docker run -v {volumeName}:/{path} {image}`. If you don't want to create a volume preemptively and want to use a folder somewhere on your system, replace `{volumeName}` by the path to your desired folder. You can also use the `-v` options as much as you want to use multiple volumes.

> Be careful ! You can omit the path when using the volume option, but doing so will make the data non-persistent and place the volume at the root of the filesystem.

# Instructions

**It's dangerous to go alone!** Take this.

- Prepare yourself by creating a `bag` volume.
- Once you’ve got your bag ready, create a `sword` file and a `shield` file. Keep them in your `bag` volume.
- You should also get a fairy. Grab one by heading [here](https://static.wikia.nocookie.net/ssb/images/a/af/FairyBottle.png) and save the file as `FairyBottle.png`.
- Oh, and while you’re at it, grab a bow by creating a `bow.wp` file.
- Put every file in your bag volume.
- Once this is done, you should be ready to go.
  - Use `ls -l` in the `bag` folder and store the output in `link.sh`

# Expected results

- The first line you should see when using `ls -l` should be `total 240`
- All the files should be owned by root

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

> Volumes : [https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/)
