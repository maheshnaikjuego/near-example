#!/bin/sh

./build.sh

if [ $? -ne 0 ]; then
  echo ">> Error building contract"
  exit 1
fi

echo ">> Deploying contract"

# https://docs.near.org/tools/near-cli#near-dev-deploy
near deploy $NFT_DEV_CONTRACT --wasmFile build/nearnfttest.wasm --accountId $NFT_DEV_CONTRACT