docker build -t $USER_NAME/redis-gui .
echo "build success"
echo "docker login"
docker login -u "$DOCKER_USER" -p "$DOCKER_PASSWORD"
docker images
docker push
