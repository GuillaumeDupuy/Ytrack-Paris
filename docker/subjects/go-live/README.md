# Go Live 🏙️

It’s time to get some sort of big environment set up! Docker Compose is often used in conjunction with databases to quickly test your code and check if there’s a problem with your infrastructure.

Well, this is your turn. The goal of this exercise is to get something that looks like this:

![schema.png](https://i.imgur.com/1oxAZMa.png)

There are three main things to get working here:

- A working reverse proxy that redirects to a Pool game when heading to **/game** in a web browser
- A simple CRUD tester when heading to **/data**
- A working database linked to the CRUD tester

While there are multiple ways to get an infrastructure like this, this exercise will follow a “traditional” way of setting this up. Let’s get to it!

# Instructions

- Create the service `reverse-proxy`:
  - This service will need to use the NGINX image paired with [this config file](https://raw.githubusercontent.com/Deytron/files/main/go-live-exo/default.conf) mounted in _/etc/nginx/conf.d/default.conf_
  - It needs to have port 80 open and to depend on `game` and `data-tester`
- Create the service `game`:
  - This service will use [this Dockerfile called **Game**](https://raw.githubusercontent.com/Deytron/files/main/go-live-exo/Game) in the same directory.
  - The service needs host port 3000 to container port 80 open
- Create a `data-tester` service:
  - Using the image `dpage/pgadmin4`
  - With host port 5000 bound to container port 80
  - With these environment variables set:
    - PGADMIN_DEFAULT_EMAIL: "[go@live.com](mailto:go@live.com)"
    - PGADMIN_DEFAULT_PASSWORD: root
  - Depending on `database`
- Create a `database` service:
  - Using the image `postgres`
  - With these environment variables set:
    - POSTGRES_USER: go-live
    - POSTGRES_PASSWORD: root
  - With port 5432 open
- Push everything to your git:
  - `default.conf`
  - your `docker-compose.yml`
  - `Game`

You can have a little more fun with the Data Tester service:

- Download this database and extract it so that you have a `dvdrental` directory
- Head to [localhost/data](http://localhost/data) and login with the right credentials
- Right click on _servers_ to add a server, and use `database` as hostname, with the password _root_ and port 5432
- Then, create a new database, right click on it > restore, click on the folder icon on the right, then on the upload icon, drag and drop your `dvdrental` directory, set **/** as filename, then confirm. The database will then be available!

# Expected results

- You should be able to play a cool game at [localhost/game](http://localhost/game)
- [localhost/data](http://localhost/data) should display the PgAdmin login page

![https://i.imgur.com/LkHpJjv.png](https://i.imgur.com/LkHpJjv.png)

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker volumes: [https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/)

> Compose environment variables: [https://docs.docker.com/compose/environment-variables/](https://docs.docker.com/compose/environment-variables/)
