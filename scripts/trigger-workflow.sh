#!/usr/bin/env bash

curl -XPOST -u "meister:${ACTIONS_TOKEN}" -H "Accept: application/vnd.github.github.v3+json" -H "Content-Type: application/json" https://api.github.com/repos/meister/meister.github.io/actions/workflows/build-site.yml/dispatches --data '{"ref":"master","inputs":{"version": "manual-trigger"}}'