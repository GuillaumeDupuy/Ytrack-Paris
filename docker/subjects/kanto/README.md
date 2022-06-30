# Kanto

There are multiple ways to pass environment variables to Docker:

- Either at launch, with `-e` or `--env`
- Within a Dockerfile
- Within a Compose file

As a lot of things can change during development, so variables are a good to way automate and adapt to those changes. Keep in mind that a variable set in a code isn’t an environment variable. The latter persists throughout a session, and can be reused and modified at will.

To pass a variable in a Dockerfile, the `ENV` clause id used, like `ENV TEST=foo`.

In Compose, the `environment` clause in the service is used:

```yaml
---
version: '3.9'
  services:
    myservice:
      image: animagetouse
      environment:
        MYKEY: some_value
        otherkey: 3
```

### Dotenv

A Dotenv file is a file generally named `.env` in the directory. It is often used for storing variables such as login credentials, URLs, ports, and pretty much anything that could be needed when running a container. The main advantage of using a Dotenv file is that if you need to change a single variable, you don’t need to scour your long Compose file, you just have to edit it in the .env file.

> A Dotenv file can actually have any name, `.env` is just a convention

You set variables in a Dotenv file as you would do in an Unix system:

```bash
$ cat .env
PORT=8080
```

You can use the Dotenv file in your Compose file in two ways :

- By being called `.env` and being in the same directory, it is automatically loaded
- If the name is different, you have to use the `--env-file` argument along with the file name

Call your variables in your file like this:

```yaml
# If you wish to set an environment variable
image: nginx
  environment:
    PORT: ${VARIABLENAME}
# You can also use it anywhere
image: ${IMAGENAME}
```

# Instructions

- Create a `database` service:
  - Using the image `mysql`
  - Has to use the environment variables set in the `.env` file
  - With ports 3306 open
- Create a `panel` service:
  - Using the image `phpmyadmin`
  - With the following environments variables:
    - PMA_HOST: database
    - PMA_PORT: 3306
    - PMA_ARBITRARY: 1
      These variables **do not** have to be in the `.env` file
  - Has to depend on the `database` service
  - With port 8080 open and bound to inbound port 80
- Create a `.env` file in the same folder with the following variables set:
  - MYSQL_ROOT_PASSWORD=Pallet_Town
  - MYSQL_USER=AshKetchum
  - MYSQL_DATABASE=kanto
  - MYSQL_PASSWORD=HeyYouPikachu!

> Don’t hesitate to visit localhost:8080 to see if PHPMyAdmin is up!

# Expected result

[localhost:8080](http://localhost:8080) should display the PHPMyAdmin login page:

![https://i.imgur.com/gYnCVUn.png](https://i.imgur.com/gYnCVUn.png)

# Notions

> Docker Compose file reference: [https://docs.docker.com/compose/compose-file/compose-file-v2/](https://docs.docker.com/compose/compose-file/compose-file-v2/)

> Docker environment variables: [https://docs.docker.com/compose/environment-variables/](https://docs.docker.com/compose/environment-variables/)
