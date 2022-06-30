# Elden Ring

Here’s a list of all the notions you will need to use in this exercise:

- Volumes
- Networks
- Environment variables
- Environment files
- Deploy
- Ports

### Env ?

You may have noticed that there are two ways you can use environment variables: either within your Compose file or with a `.env` file. But there’s also a `env_file` clause that is different from the dotenv.

The `.env` file will allow you to substitute variables _inside_ the Compose file, while other env files are meant to be used _within_ the container, not in the Compose file.

### Image version

You can specify a version to use with your image. When no version is specified, like this:

```yaml
services:
	web:
		image: nginx
```

The latest version will always be used. But you can [head to the image docs](https://hub.docker.com/_/nginx) and check the tags. Each tag corresponds to a version, either an older or more stable version, or an image based on a different Linux distro. For example, you will often find lighter images based on `alpine`.

You can specify a version like this:

```yaml
services:
	web:
		image: nginx:1.21
```

# Instructions

You are new to the Lands Between. You will have to fight three bosses, each of them with their particularities.

- Create two dotenv files:
  - The first dotenv file simply has to be called `.env` and must contain these values:
    - ALTUS=/home/altus-plateau
    - PLAYER*NAME can be anything you want *(that is a valid RFC 1123 hostname)\_
- Create a `player` service:
  - That has as `hostname` **${PLAYER_NAME}**
  - That uses the environment variable **CLASS** set to **”hero”**
  - Uses image `ubuntu`
  - In the networks `lands-between`
- Create the first boss, the `margit` service:
  - [Margit The Fell Omen](https://eldenring.wiki.fextralife.com/Margit,+The+Fell+Omen) will have to use image `alpine` version 3.16
  - Using volume `limgrave` bound to `/home/limgrave`
  - Using environment variable `STATUS` set to **”optional”**
  - With a maximum CPU count set to `2`
  - In the networks `lands-between`
- Create the second boss, the `draconic-tree-sentinel` service:
  - [Draconic Tree Sentinel](https://eldenring.wiki.fextralife.com/Draconic+Tree+Sentinel) will have to use image `busybox` version 1.35
  - Using the environment file `draconic-tree-sentinel.env` with these values inside:
    - HP=13,362
    - STRONG=Fire,Lightning,Hemorrhage,Frostbite
    - WEAK=Phy
    - RUNES=50000
  - Having volume `altus-plateau` bound to **${ALTUS}**
  - With **2** replicas
  - In the networks `lands-between`
- Finally, create the third boss, the `godfrey` service:
  - [Godfrey, First Elden Lord](<https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord+(Golden+Shade)>) will have to use image `redis` version 7.0
  - Having volume `leyndell` bound to `/home/leyndell`
  - With the environment variable `STATUS` set to **”required”**
  - With port 6379 open
  - In the networks `lands-between`
    - With an IP address of `10.25.20.22`
- Create the network `lands-between`:
  - With a subnet of 10.25.20.0/24
  - With a gateway set to 10.25.20.254
- Create three empty volumes:
  - limgrave
  - leyndell
  - altus-plateau

# Expected result

You should see something like this in your terminal:

```bash
[+] Running 5/5
 ⠿ Container elden-ring-margit-1                  Created                                                                                        0.0s
 ⠿ Container elden-ring-draconic-tree-sentinel-2  Created                                                                                        0.0s
 ⠿ Container elden-ring-draconic-tree-sentinel-1  Created                                                                                        0.0s
 ⠿ Container elden-ring-godfrey-1                 Created                                                                                        0.1s
 ⠿ Container elden-ring-player-1                  Created                                                                                        0.0s
Attaching to elden-ring-draconic-tree-sentinel-1, elden-ring-draconic-tree-sentinel-2, elden-ring-godfrey-1, elden-ring-margit-1, elden-ring-player-1
elden-ring-godfrey-1                 | 1:C 20 Jun 2022 14:50:56.372 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
elden-ring-godfrey-1                 | 1:C 20 Jun 2022 14:50:56.372 # Redis version=7.0.2, bits=64, commit=00000000, modified=0, pid=1, just started
elden-ring-godfrey-1                 | 1:C 20 Jun 2022 14:50:56.372 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
elden-ring-godfrey-1                 | 1:M 20 Jun 2022 14:50:56.372 * monotonic clock: POSIX clock_gettime
elden-ring-godfrey-1                 | 1:M 20 Jun 2022 14:50:56.373 * Running mode=standalone, port=6379.
elden-ring-godfrey-1                 | 1:M 20 Jun 2022 14:50:56.373 # Server initialized
elden-ring-godfrey-1                 | 1:M 20 Jun 2022 14:50:56.373 * Ready to accept connections
elden-ring-player-1 exited with code 0
elden-ring-draconic-tree-sentinel-1 exited with code 0
elden-ring-draconic-tree-sentinel-2 exited with code 0
```

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker volumes: [https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/)

> Compose environment variables: [https://docs.docker.com/compose/environment-variables/](https://docs.docker.com/compose/environment-variables/)

> Docker Compose networking: [https://docs.docker.com/compose/networking/](https://docs.docker.com/compose/networking/)
