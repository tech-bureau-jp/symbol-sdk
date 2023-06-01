#!/bin/bash
set -e

export HOST=${ENV_HOST}
export PORT=${ENV_PORT}
export NODE_ENV=${NODE_ENV}

[ -f ./package.json ] && yarn install

exec "$@"
