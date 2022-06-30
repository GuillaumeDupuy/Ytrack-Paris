# Detached Database

Docker is often used to offload your data and resources to a container. The big advantage is that you don’t need to install a specialised software: a single Docker container replaces the whole installation process.

Databases are the most common use cases, and there’s a reason for that: the time to set up your database with Docker is **extremely** short, as you don’t have to download and install the system on your host machine. Also, it is platform agnostic, any other computer can use your setup as long as it has Docker installed.

> You won’t have much help on this exercise. This is intentional.

# Instructions

- Run a detached Docker container with the `keinos/sqlite3` image
- Import [this](https://github.com/Deytron/files/raw/main/chinook.db) small dump of database into the container *(Take a look at the notions to see how to do that).* Don’t forget to import the file as a volume
- Use any language of software you want to retrieve the address of employee id 5, and decrypt it using either a command line tool or an online decrypter
- Put the decrypted password in `detached-database.sh`

# Expected result

You should be prompted with the SQLite3 standard prompt:

```bash
SQLite version 3.38.5 2022-05-06 15:25:27
Enter ".help" for usage hints.
sqlite>
```

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> SQLite3 command line : [https://www.sqlite.org/cli.html](https://www.sqlite.org/cli.html)
