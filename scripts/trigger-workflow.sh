#!/usr/bin/env bash
set -euo pipefail
: "${ACTIONS_TOKEN:?Set ACTIONS_TOKEN to a token with Actions write access to meister/meister.github.io}"
version=${1:-latest}
payload=$(node -e 'console.log(JSON.stringify({ref: "master", inputs: {version: process.argv[1]}}))' "$version")
curl --fail-with-body --silent --show-error \
  -X POST -H "Authorization: Bearer ${ACTIONS_TOKEN}" \
  -H 'Accept: application/vnd.github+json' \
  -H 'Content-Type: application/json' \
  https://api.github.com/repos/meister/meister.github.io/actions/workflows/build-site.yml/dispatches \
  --data "$payload"
