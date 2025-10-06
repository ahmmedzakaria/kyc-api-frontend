#!/bin/bash
set -e

APP_NAME="kyc-frontend"
IMAGE_NAME="kyc-frontend"
CONTAINER_NAME="kyc-frontend"
PORT="4200"

echo "🚀 Building ${APP_NAME} Docker image..."
docker build -t ${IMAGE_NAME} .

# Stop and remove old container if exists
if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then
  echo "🧹 Removing old container..."
  docker stop ${CONTAINER_NAME} >/dev/null 2>&1 || true
  docker rm ${CONTAINER_NAME} >/dev/null 2>&1 || true
fi

echo "🏗️ Starting ${APP_NAME} container..."

docker run -d \
  --name ${CONTAINER_NAME} \
  -p ${PORT}:${PORT} \
  ${IMAGE_NAME}

echo "✅ ${APP_NAME} is up and running on http://localhost:${PORT}"
echo "📂 Uploads directory: $UPLOAD_DIR"
echo "📜 Logs: docker logs -f ${CONTAINER_NAME}"