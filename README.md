# MetaStrap Static Website

A Developer tool for generating bootstrapped Next.Js project with option to opt various frameworks and features. It is provisioned to expand to other frameworks and languagues as well. Those are work in progress.

## Architecture

Metastrap site is a static build on Next.Js in Github Actions. This site is powered by `@metastrap/core` package. Please read [the docs](https://www.npmjs.com/package/@metastrap/core) for understanding the architecture in detail.

### Build
The `core` package contains base templates for Next.Js. During the build process, a `zip` is generated for each use case and pushed to Github Artifact in public directory. 

### Pageload
During the page load, the built `zip` files are downloaded in memory based on the use case and unzipped for manipulation.

All the frameworks and features opted on the site are added to the base template using JSON or AST manipulation. On click of the download button, it modified files are zipped again as a single bundle to allow devs to download them. This prevents dependency on any backend service for generating final package.

### Challenges
- The Next.Js has both `pages` and `app` architecture, the site needs to accommodate both.
- Supporting both `JavaScript` and `TypeScript` options.

For testing, the combination of all the above points are taken care of.
