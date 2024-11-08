#!/usr/bin/env bash

IMAGENAME="ghcr.io/openconext/openconext-invite/inviteserver"

mvn clean install -DskipTests
docker build --tag ${IMAGENAME} -f docker/Dockerfile .
