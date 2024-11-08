#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-invite/invitewelcome"

mvn clean install
docker build --tag ${IMAGENAME} -f docker/Dockerfile .
