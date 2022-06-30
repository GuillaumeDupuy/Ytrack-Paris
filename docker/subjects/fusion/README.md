# Fusion 🐉

Yes, you can combine Dockerfiles and Docker Compose files! For this, you use a `build` clause in your docker-compose.yml. Here’s a simple example:

```yaml
---
version: "3.9"
services:
  app:
    build: .
    tty: true
    ports:
      - "8080:8080"
```

The `build` line allows to choose a Dockerfile to use as the service image. Say you have a web server with custom files, and you also need to set a few environment variables, this is a great option to not overload your Compose file.

**Be aware!** Even though the `build` clause is present, the Dockerfile will not get rebuilt every time you will bring the service up. To build or rebuild a Dockerfile, use `docker-compose build`. This is an intended behavior, as the previous image is kept in cache in order to avoid rebuilding every time you run your Compose file.

# Instructions

Your goal is to get three Blue Eyes White Dragons running to fuse them with Polymerization. If you had a childhood, you would know we’re talking about Yu-Gi-Oh here.

- Create a Dockerfile in the `fusion` directory that:
  - Uses the `node` image
  - Creates a `fusion` directory at the root of the container
  - Use `npm init -y` to create a project in the directory
  - Install `express`
  - Download and copy [this](https://raw.githubusercontent.com/Deytron/files/main/server.js) file in the directory
  - Use the CMD clause with `node` to run `server.js`
- Create three services called respectively `blue-eyes-white-dragon1`, `blue-eyes-white-dragon2` and `blue-eyes-white-dragon3`\* that will use this Dockerfile
- Each of the dragon will need to stay alive with a `tty` and have respectively outbound ports 3000, 3001 and 3002 bound to inbound port 3000
- Create a `polymerization` service that depends on all three dragons, uses the image `curlimages/curl` and curls each of the dragon on port 3000
- Push the folder containing both `docker-compose.yml` and the `Dockerfile`

> \*_We are voluntarily not using replicas for now_

# Expected result

You should see this in your terminal:

```bash
[+] Running 4/0
 ⠿ Container fusion-blue-eyes-white-dragon3-1  Created                                                                                           0.0s
 ⠿ Container fusion-blue-eyes-white-dragon1-1  Created                                                                                           0.0s
 ⠿ Container fusion-blue-eyes-white-dragon2-1  Created                                                                                           0.0s
 ⠿ Container fusion-polymerization-1           Created                                                                                           0.0s
Attaching to fusion-blue-eyes-white-dragon1-1, fusion-blue-eyes-white-dragon2-1, fusion-blue-eyes-white-dragon3-1, fusion-polymerization-1
fusion-blue-eyes-white-dragon2-1  | Fusion listening on port 3000
fusion-blue-eyes-white-dragon1-1  | Fusion listening on port 3000
fusion-blue-eyes-white-dragon3-1  | Fusion listening on port 3000
fusion-polymerization-1           |   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
fusion-polymerization-1           |                                  Dload  Upload   Total   Spent    Left  Speed
100    34  100    34    0     0   2522      0 --:--:-- --:--:-- --:--:--  2615FUSION! Blue-Eyes Ultimate Dragon!
fusion-polymerization-1           |   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
fusion-polymerization-1           |                                  Dload  Upload   Total   Spent    Left  Speed
100    34  100    34    0     0   3407      0 --:--:-- --:--:-- --:--:--  3777
fusion-polymerization-1           | FUSION! Blue-Eyes Ultimate Dragon!  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
fusion-polymerization-1           |                                  Dload  Upload   Total   Spent    Left  Speed
100    34  100    34    0     0   3361      0 --:--:-- --:--:-- --:--:--  3400FUSION! Blue-Eyes Ultimate Dragon!
fusion-polymerization-1 exited with code 0
```

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker Compose networking: [https://docs.docker.com/compose/networking/](https://docs.docker.com/compose/networking/)

> Usage of the ping command (man) : [https://linux.die.net/man/8/ping](https://linux.die.net/man/8/ping)

> Multiple commands with Compose: [https://stackoverflow.com/a/52641495](https://stackoverflow.com/a/52641495)
