# Multiple Entries Prototype

## Getting started

1. Install [Yarn](https://yarnpkg.com)
1. Clone repo using Git
1. Run `yarn install` in root of repo
1. Run `yarn workspaces run build` to build all the projects
1. Inspect the output (the `dist` folders) of each project to understand how it
   handled bundling the `custom-preact` project

## TODO

- Document how prototype works and the results
  - Describe how custom-preact mimics how preact distro could look
  - Describe how I'm using yarn workspaces to mimic how a consumers would
    consume the custom-preact project
  - Add hypthosis about why this technique works
