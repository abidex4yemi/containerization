# containerization

**Containerization involves bundling an application together with all of its related configuration files, libraries and dependencies required for it to run in an efficient and bug-free way across different computing environments. The most popular containerization ecosystems are Docker and Kubernetes.**

`[Hackernoon => Shaan Ray =>] (https://hackernoon.com/what-is-containerization-83ae53a709a6)`

# Docker

- Is a virtual machine that is capable of assigning software and harware resources of a physical machine to multiple instances of container 💪. It's allow's for fast development and deployment of application in any os platform

### Why docker?

### What is an image?

- An image is a snapshot of a `fs` file system with default packages and command

### What is a container

- A container is an instance of an image which is a process on it's own

### Commands

### Display all Commands & Management Commands

```docker
$ docker
```

### Show detailed container info

```docker
$ docker info
```

# IMAGES COMMAND

# CONTAINER COMMAND

### List all running containers

```docker
$ docker ps
```

### List all running and exited container

```docker
$ docker ps --all
```

### Create new docker container from existing image

```docker
$ docker create <image-name> or <image-id>
```

### Start a container

- Note: -a allows you to see the default output from the container

```docker
$ docker start -a <container-id>
```

### Show default container output messages

```docker
$ docker logs <container-id>
```

### `shortcut` Create and start a container

```docker
$ docker run -it <image-id> or <image-name>
```

### Forcefully shutdown a container immediately

```docker
$ docker kill <container-id>
```

### Stop container and it's processes after 10 seconds

```docker
$ docker stop <container-id>
```

### Delete all containers/dangling images/all build cache/running containers

```
$ docker system prune
```

### Run a command when starting a container

- Note: -it => equals -i -t -i stands for STDIN -t for pretty formating output

```docker
$ docker exec -it <container-id> <command-to-run>
```

# Creating custom docker images from `DOCKERFILE`

- Create a new Dockerfile in working directory
- Specify a base image
- packages to install
- Default program to run

`Example`

```
# use an existing docker image as a base
FROM alpine

# download and install dependencies
RUN apk add --update redis

# tells the image what to do when it's start as a container
CMD ["redis-server"]
```

- Run

```docker
$ docker build .
```

Note this will create a new image without <tag>
if you want tag

Run this

```docker
$ docker build -t <docker-id>/<image-name>:<version-name> .
```

# Creating new image from existing container

```docker
$ docker run -it <container-id> sh
```

```bash
 # add your new packages e.g
 $ apk add --update redis
```

- In a new terminal run

```bash
$ docker commit -c 'CMD ["Set-default-package"]' <container-id>
```

## Creating basic node server image and container

- Create `Dockerfile`

- Dockerfile content

```bash
# Specifiy base image
FROM node:alpine

# specify working directory
WORKDIR /usr/app

# this helps if no changes in package.json file(by using cache)
COPY ./package.json ./

# Install dependencies
RUN npm install

# copy files & folders from current build context to above specified wokdirectory directory
COPY ./ ./

# Default container command
CMD ["npm", "start"]
```

**By default container can interact with the internet e.g `npm install` command but
for local machine to connect or forward request to the container we have to expose a port from our local machine and map it with the container port e.g docker `run -p <anyport-number>:<current-node-server-port-number> <image-name>`**

```bash
$ docker run -p 2030:3000 <image-name>
```
