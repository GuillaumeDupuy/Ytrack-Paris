# Mugiwara👒

Another great thing you can do with Docker is expose multiple services without taking too much resource on your machine. This is one of the main use case of containers, and probably the one you will use the most in future projects.

### Ports

You may know what they are already, but let’s do a quick recap : ports are like doors. You have one house, but multiple doors to enter it. When you install Docker, it creates “another house” : the Docker engine has its own network, and every container you create gets an IP address along with a network interface, a DNS service and everything it needs. It makes sense that there are ports you can open and close inside the network.

By default, all ports are closed when you run a container. To publish a port, you can use the `-p`, or `--publish` to open a port to the outside world. You can map the internal and external port exactly like you would do in your router’s control panel. Ports that you open will by default be on `0.0.0.0`, which means that any device trying to reach the port on the network gateway will be redirected to this container.

![Docker ports scheme](https://i.imgur.com/9uUT868.png)

> Some images open ports by default. For example, NGINX and Apache open port 80 without you needing to map them with `-p` flag

### Mapping

You can totally bind an internal port different than the external port.

For example : NodeJS apps usually run on [localhost](http://localhost) on port `3000`. You can bind the internal port `3000` to external port `80` if you want to make things easier for you. You can do that by using `docker run -p 3000:80`. This means that all packets getting to port `80` will be redirected to port `3000` of the `node` container.

### Networks

You can create multiple networks with Docker and set every network option you would need, from the subnet to the gateway, the IP range etc. This is useful if you want to isolate containers from other containers, or if you want to use their name as hostname.

To create a network, use the command `docker network create`. From there, you can use these options :

- `--subnet` to set the subnet of the container
- `--gateway` to set the gateway. This will allow your containers to ping back and from your PC or the Internet, or another network
- `--ip-range` along with the netmask to set the range of IP addresses that will be used by the containers

Obvisouly, there is a lot of other options, but these will be the ones you will use the most. To see the list of networks available, use `docker network ls`.

# Instructions

It’s your turn ! The Vogue Merry has been lost along with its crew, and Luffy is the only one that is able to find them. Here is what you need to do :

- First things first, get on the sea by creating a Docker network called `grand-line`, with a gateway of `10.35.0.1`.
- Secondly, find Luffy by running a container with image `nginx`. Name it `monkey-d-luffy` and bind external port 3200 to internal port 80 so that you can access it from the same computer.
- Finally, rescue Zoro by running a container with image `ynovcampus/ytrack-docker-zoro` and name it `roronoa-zoro`. Make sure it is on the same network. If all steps are done correctly, you will get a password.
- Put that password in `mugiwara.sh` and push it to your Git.

# Expected result

You should see Zoro in your terminal:

![https://i.imgur.com/fFBSBVZ.png](https://i.imgur.com/fFBSBVZ.png)

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

> Container Networking : [https://docs.docker.com/config/containers/container-networking/](https://docs.docker.com/config/containers/container-networking/)

> Networks : [https://docs.docker.com/engine/reference/commandline/network_create/](https://docs.docker.com/engine/reference/commandline/network_create/)
