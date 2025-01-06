#!/bin/bash

if [[ ! -d certs ]]
then
    mkdir certs
    cd certs/
    if [[ ! -f localhost.pfx ]]
    then
        dotnet dev-certs https -v -ep localhost.pfx -p 10c6a685-6c57-49f7-9f5a-7e76520de6d7 -t
    fi
    cd ../
fi

docker-compose up -d
