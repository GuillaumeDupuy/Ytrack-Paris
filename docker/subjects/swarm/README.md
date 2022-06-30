# Introduction to Swarm 🐝

This exercise will be a quick introduction to clusters, and more specifically, Docker Swarm.

### Cluster ?

Per the Wikipedia definition, A computer cluster is **a set of connected computers (nodes) that work together as if they are a single (much more powerful) machine.** The point here is to do multiple things:

- Distribute the load between multiple machines
- Split the code in multiple micro services
- Have a scalable infrastructure

### Swarm VS Kubernetes ?

You may have heard of other orchestration tools like Kubernetes, Crossplane or Nomad. These tools are usually preferred over Swarm as they include more features and are used in more enterprises, thus having more documentation. They achieve the same result but with more a granular configuration. The advantage of Swarm here is that it is bundled with the Docker Engine, so you don’t have to install anything, and it is easier to use.

There was a debate not too long ago about the future of Swarm, as the company who bought a part of the Docker Company, Mirantis, said Swarm won’t be supported by 2021. They since went back on their decision and decided to support it and add more functionalities, so it is interesting to see how Swarm works. In the end, you should always choose what solution suits your needs best.

# Setup

### 🟦 Windows

- If you were using Docker Desktop, `swarm` is already installed on your system
- If you were using a virtual machine, refer to the instructions on your distro
- If you were using WSL2 (Linux Subsystem for Windows), refer to the **Ubuntu** section

As usual, using Docker Desktop's interface is **NOT** recommended for the exercices. The exercices are not meant to be used with a graphical manager.

### 🍎 Mac

Docker Desktop for Mac already includes Docker Swarm, you’re good to go

### 🐧 Linux

### Ubuntu/Debian

Docker Swarm is already included with Docker

### Arch Linux / Manjaro

Execute the following commands:

```bash
sudo pacman -Syu
sudo pacman -S docker-swarm
```

### CentOS 7 / Rocky Linux

Docker Swarm is already included with Docker

### CentOS 8 / Fedora

Docker Swarm is already included with Docker

---

### How Swarm works

The way it works is simple: you deploy one or more services to a cluster. A cluster is a group of multiple nodes _(or machine)_ “linked” together able to run a given task. The reason why the cluster system is popular is that you can easily distribute tasks in the cluster. A node can be a physical or virtual machine, as long as it is “cloud-ready”, meaning that each node should have all the libraries required to execute the task.

![A cluster](https://www.smartwavesa.com/wp-content/uploads/2018/03/docker-swarm-docker-native-clustering-5-638.jpg)

This will obviously require way more setup.

### Requirements

> Due to the necessity of virtualization, this bonus exercise is currently not doable on **ARM** **machines** such as the MAC M1/M2. Things can change if they get x86 emulation support

Start by creating a virtual machine with your favorite hypervisor (VirtualBox, VMWare or Hyper-V). Use this CentOS image along with a configuration of something like 1G of RAM and 1vCPU. Install the image as usual and install Docker along the way. Once this is done, clone this VM so you have three VMs in total (if you are using VirtualBox, don’t use the same MAC addresses).

> Make sure all the PCs are in the same network, either bridged or host-only

Once this is done, you will need to use one of your node as the host manager. Remember its name and SSH into it (for easier copy paste). What we will do here is create a Swarm from our manager. To create a Swarm, use `docker swarm init --advertise-addr <host-ip-adress>`. The `--advertise-addr` flag configures the manager node to publish its address as `192.168.99.100`. The other nodes in the swarm must be able to access the manager at the IP address.

This command will output another command you will need to use along with a token. Copy that command.

### Nodes

Once you have your master node ready, you need to connect your other nodes. These will be your _worker_ nodes. SSH into a node and use the command you previously copied:

```bash
docker swarm join \
  --token  SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \
  <host-machine-ip>:2377
```

Do the same for your third node and voila! You just made yourself a three nodes cluster.

### Deployment

To deploy a very simple service, use `docker service create --replicas 1 --name helloworld alpine ping docker.com`

- The `docker service create` command creates the service.
- The `-name` flag names the service `helloworld`.
- The `-replicas` flag specifies the desired state of 1 running instance.
- The arguments `alpine ping docker.com` define the service as an Alpine Linux container that executes the command `ping docker.com`.

# Instructions

- Create a cluster by following the above steps
- Create a service named `bee` that uses image **curlimages/curl** and curls the website `www.ynov.com`
- Inspect the result with `docker service inspect --pretty`
- Put the 2 commands you used to create and inspect the service in `swarm.sh`

# Expected result

You should get this in your terminal after inspecting:

```bash
ID:		9uk4639qpg7npwf3fn2aasksr
Name:		bee
Service Mode:	REPLICATED
 Replicas:		3
Placement:
UpdateConfig:
 Parallelism:	1
ContainerSpec:
 Image:		curlimages/curl
 Args:	curl www.ynov.com
Resources:
Endpoint Mode:  vip
```

# Notions

> Swarm tutorial: [https://docs.docker.com/engine/swarm/swarm-tutorial/](https://docs.docker.com/engine/swarm/swarm-tutorial/)
