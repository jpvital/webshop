#!/usr/bin/env bash

aws configure set default.region eu-west-2
aws configure set default.s3.signature_version s3v4

bucket="webshop-bucket"

echo "[DEPLOY] syncing files to $bucket"

aws s3 sync ./build s3://$bucket --exact-timestamps --delete || return 1;

echo "[DEPLOY] sync passed"

exit 0
