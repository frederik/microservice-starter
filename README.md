# Microservices

Opinitionated server infrastructure using TypeScript and Docker

## Requirements

 * Node 6/8
 * Docker

## Setup

Make sure you run npm install in shared and the servers if you want to build any of them.

To start the containers run docker-compose up -d
To start individual servers locally run npm run watch and then start the server from the VS Code debug configuration.

## Recommendations

The repository contains launch configurations for Visual Studio Code to make debugging easier

Recommended plugins

Docker
TSLint

For TSLint to work either install TSLint globally (npm i -g tslint) or run npm install in the root directory of this repo.

### Other topics not included

 * JWT authentification
 * Reverse Proxy and Routing with Traefik
 * Logging with the ELK stack
 * Docker swarm configurations and setup with ansible
 * Setup of a docker registry

This software is currently not tested on Windows. If there is any weird behavior, maybe check the docker container first.
