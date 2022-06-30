# Webber 🕸️

Volumes don’t need to be persistent. You can quickly mount a volume without creating it beforehand. Let’s say you want to use a `python` app that you just created. Here’s what you would have to do:

### Steps

- Create a simple Python code, obviously
- Per the Docker Python image documentation, use

```bash
docker run -v "$PWD":/usr/src/myapp -w /usr/src/myapp
```

Here, `$PWD` is the current directory, it will take everything in that directory and mount it in `/usr/src/myapp`. Then, `-w` will set the container working directory there to run your project.

- Run the app and observe the output.

This is just an example, but you get the drill. Doing this allows you to import your files in a container and test a project in a specific environment quickly.

# Instructions

- Create a folder `webber`
- Download [this minimal config](https://raw.githubusercontent.com/Deytron/files/main/index.html) and save it in the `webber` folder
- Use the `httpd` official image and import the index and config file into the container. Path to the index file is `/usr/local/apache2/htdocs/index.html`
- Run the container with port 80 open
- Store the command you used in `webbber/webber.sh`

# Expected result

Heading to [localhost](http://localhost) should greet you with this message along with a GIF:

![https://i.imgur.com/QXNfwoH.png](https://i.imgur.com/QXNfwoH.png)

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

> Volumes : [https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/)
