#!/usr/bin/env bash

docker stop airfec_photos_server
docker rm airfec_photos_server
docker rmi -f airfec/airfec_photos airfec_photos
docker build . -t airfec_photos:latest