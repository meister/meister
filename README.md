# Martin Kapp

Just run

```sh
npx meister
```

Thanks!

Supports Node.js 10 and newer. CI checks clean installs and the packaged CLI
across Node 10–26; dependencies intentionally remain compatible with Node 10.
The development runtime is selected by `.nvmrc`.

## Releasing

Merge a PR labeled `publish`, or run **Publish release to NPM** manually on
`master` to release content that has already been merged. The workflow validates
compatibility, bumps the patch version, publishes to
npm, pushes the release commit/tag, and creates a GitHub release.

Publishing uses npm trusted publishing (OIDC), so no stored npm token is needed.
In the npm package settings, add a GitHub Actions trusted publisher with user
`meister`, repository `meister`, workflow filename `npm-publish.yml`, and no
environment name. Allow direct `npm publish` for this publisher. This only affects
the release runtime; the installed package still supports Node 10.

The repository secret `actions_token` must contain a GitHub token with Actions
write permission on `meister/meister.github.io`, used to dispatch its site build.

The site is rebuilt using the published version. If only the site update fails,
run **Update meister.github.io** with the published version; do not publish another
package just to retry deployment. The website's Pages source must be configured
as **GitHub Actions**.
