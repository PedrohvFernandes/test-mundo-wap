#!/bin/bash

# Stop any existing Docker Compose services
docker-compose down

# Start Docker Compose services in detached mode
docker-compose up -d

# Check if the "-l" flag is passed as an argument
if [[ " $@ " =~ " -l " ]]; then
    # If the "-l" flag is present, display the logs and follow them
    docker-compose logs -f
fi
