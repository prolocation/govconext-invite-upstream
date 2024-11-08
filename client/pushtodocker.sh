#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-invite/inviteclient"
VERSION=0.0.20

mvn clean install
docker build --tag ${IMAGENAME}:${VERSION} -f docker/Dockerfile .
