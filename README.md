Just a few docker example for build a node application.

docker pull: Pulls an image or a repository from a registry.

docker pull <image_name>


docker build: Builds an image from a Dockerfile.

docker build -t <image_name> .


docker run: Runs a command in a new container.

docker run <image_name>


docker ps: Lists running containers.

docker ps


docker stop: Stops one or more running containers.

docker stop <container_id>


docker rm: Removes one or more containers.

docker rm <container_id>


docker images: Lists all images that are locally stored on your system.

docker images


docker rmi: Removes one or more images.

docker rmi <image_id>


docker exec: Runs a command in a running container.

docker exec -it <container_id> <command>


docker-compose: Manages multi-container Docker applications using a YAML file (docker-compose.yml).

docker-compose up
