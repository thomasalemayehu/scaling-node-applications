## !bin/bash#!/bin/bash

# Build main app image
cd ./app
docker build -t mainapp .

cd ..

# Build service app image
cd ./service
docker build -t serviceapp .


cd ..
# run load balancer image 
docker compose up

