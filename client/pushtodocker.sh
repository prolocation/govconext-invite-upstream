#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-invite/inviteclient"

mvn clean install
docker build --tag ${IMAGENAME} -f docker/Dockerfile .
