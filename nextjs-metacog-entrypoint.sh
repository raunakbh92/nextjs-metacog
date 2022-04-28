#!/bin/bash
set -e

echo "exporting node"
export NVM_DIR=$HOME/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "start nextjs"
cd /home/nextjs-metacog
npm run dev

exec "$@"
