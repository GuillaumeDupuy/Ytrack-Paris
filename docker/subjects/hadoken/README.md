# Hadoken 🔥

Docker Compose makes use of volumes extensively. They work in exactly the same way you used them in the previous exercises.

You can use a volume in Compose in three different ways:

- With a volume you already created
- With a volume you want to create at run
- With a directory

You can use a volume in Compose this way:

```yaml
 frontend:
    image: node
    volumes:
      - myapp:/home/node/app
volumes:
  myapp:
```

This is going to create the volume `myapp`. If you want to use a volume you created beforehand, use:

```yaml
volumes:
  myapp:
	external: true
```

You can also use a directory:

```yaml
frontend:
  image: node
  volumes:
    - /home/user/myapp:/home/node/app
```

If you want to use one file, do it with a relative path:

```yaml
frontend:
	image: node
	volumes:
		- ./test.cfg:/home/node/app/config/test.cfg # File
		- ./testfolder:/home/node/app/assets
```

# Instructions

The Street Fighter tournament is starting soon, and you need to bring all the fighters at the same place.

- [Download this archive](https://github.com/Deytron/files/blob/main/assets.zip?raw=true) and extract the content in your `hadoken` folder. Make sure the following files and folders are present:
  - `suzaku-castle.html`
  - `battle-harbor.html`
  - `default.conf`
  - `fighters` and `bosses` folders
- In the same directory, create a `docker-compose.yml`
- Create a `suzaku-castle` service:
  - Using the `caddy` image
  - With two volumes:
    - The file `suzaku-castle.html` should be mounted as `index.html` in `/usr/share/caddy`
    - The folder `fighters` should be mounted in `/usr/share/caddy/fighters`
  - With port 80 open
- Create a `battle-harbor` service:
  - Using the `nginx` image
  - With three volumes:
    - The file `battle-harbor.html` should be mounted as `index.html` in `/usr/share/nginx/html/`
    - The folder `bosses` should be mounted in `/usr/share/nginx/html`
    - The file `default.conf` should be in `/etc/ngix/conf.d/`
  - With port 8080 open
- Create the top level volumes `fighters` and `bosses` (they can be empty)
- Push everything to your git:
  - `suzaku-castle.html`
  - `battle-harbor.html`
  - `default.conf`
  - `fighters/`
  - `bosses/`

> Head to [localhost](http://localhost:80) and [localhost:8080](http://localhost:8080) to see the results!

# Expected results

- [localhost](http://localhost) should display all the fighters on the Suzaku Castle stage
- [localhost:8080](http://localhost:8080) should display all the game bosses on the Battle Harbor stage

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker volumes: [https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/)
