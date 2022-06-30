# Introduction to Docker 🐳

Welcome to Docker! This challenge will introduce you to Docker and its concept of containers. If you are not familiar with virtualization first, I suggest you to take a look [here](https://www.baeldung.com/cs/virtualization-intro).
If you are not familiar with Linux or UNIX systems, I recommend you finish the Linux pool first.

Docker enables you to create or use lightweight cross-platform solutions that perfectly fit your needs. The purpose of Docker is to save resources as much as possible by using containers. It is **absolutely necessary** in DevOps, so you will have to learn to use it.

---

# Setup

> Docker is based on the Linux kernel to function, meaning you cannot use it natively on different operating systems.

### 🟦 Windows

There are two ways to use Docker on Windows :

- Using Docker Desktop
  - You can use it in combination with WSL2 to improve performance
- Using a virtual machine
- Using WSL2 (Linux Subsystem for Wndows)

Using Docker Desktop's interface is **NOT** recommended for the exercices. They are not meant to be used with a graphical manager.

#### Virtual machine setup

Download either [VirtualBox hosts](https://www.virtualbox.org/wiki/Downloads) [](https://download.virtualbox.org/virtualbox/6.1.30/VirtualBox-6.1.30-148432-Win.exe)or [VMWare Workstation Pro](https://www.vmware.com/fr/products/workstation-pro/workstation-pro-evaluation.html). Once installed, download a Linux image of your choice so that you get a Linux working environment.

In your manager, install the Linux image. Once the installation is done, reboot your machine and log in. Then, head to the Linux section to install Docker.

#### WSL2 setup

If you are running Windows 10 version 2004 or newer, you can use the Windows Subsystem for Linux. This allows you to use a Linux environment inside your Windows system.

To enable WSL2, open a Powershell with Admin rights and type `wsl --install`. This will download and install the latest Linux kernel along with an Ubuntu image by default. Reboot your computer. If Ubuntu is not installed, head to the Microsoft Store and download it.

Files in your Linux subsystem will be accessible in your file explorer at `\\wsl$\Ubuntu` and the `docker` command can now be used in the Windows Terminal or Powershell.

### 🍎 Mac

Download [Docker](https://docs.docker.com/desktop/mac/install/) from this link. Depending on if you have an M1 Chip or not, you’ll either need to download the Intel Chip or Apple Silicon version. Double click on the .dmg file. You'll need to enter your password to allow the app to run. Once installed, launch `[Docker.app](http://Docker.app)` to start Docker. The little whale icon in your system tray indicates that Docker is running. You can use `docker --version` in a terminal to check.

### 🐧 Linux

#### Ubuntu/Debian

Execute the following commands :

```bash
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo systemctl enable --now docker
```

### Arch Linux / Manjaro

Execute the following commands :

```bash
sudo pacman -Syu
sudo pacman -S docker
sudo systemctl enable --now docker
```

### CentOS 7 / Rocky Linux

Execute the following commands :

```bash
sudo yum update -y
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
sudo systemctl enable --now docker
```

### CentOS 8 / Fedora

Execute the following commands :

```bash
sudo dnf update -y
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io
sudo systemctl enable --now docker
```

---

# Principle of Docker

While Virtual Machines virtualize an entire operating system, Docker relies on the host operating system to function, meaning that it will use the hosts' resources more efficiently. It only uses what it needs to get a single app running.

![Untitled](https://i.imgur.com/7ksLSn5.png)

When Docker launches an app, it does it through a container. A container is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

A container is based on an image. This image can be anything : an Ubuntu system, a NodeJS app, a Python web server, or even Docker itself! Which means you can run a Docker container running a Docker image, and this image could even be used to run another Docker container inside this container! But you should not.

Simply put, it works like this :

![Dockerfile to Docker container](https://i.imgur.com/NHYndeO.png)

> See the Dockerfile? We'll talk about it in future exercices.

# My first container

So you want to see how Docker works? You can start right now! Or rather, once you're done installing Docker and creating your Git repository.

There's a huge number of Docker commands that exist, along with an enormous number of arguments you can add to these commands. You can find everything in the official Docker Documentation, but here are the commands you will use for now :

- `docker run` to run a container from an image found locally, or online
  - `--name` adds a name to the container in addition to its ID
- `docker rm` and `docker image rm` to remove containers or images respectively
- `docker stop {id}` to stop a running container

# Instructions

- Create a repository called `((ROOT))`
- Find a way to run the `hello-world` image and name it `my-first-container`
- Create a file named `my-first-container.sh` and type the command you just used inside the file, then push it to your Git.

# Expected result

You should see this in your terminal:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

# Notions

> Docker documentation : [https://docs.docker.com/](https://docs.docker.com/)

> Docker run : [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)
