#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-invite/invitewelcome"
VERSION=0.0.20

mvn clean install
docker build --tag ${IMAGENAME}:${VERSION} -f docker/Dockerfile .
