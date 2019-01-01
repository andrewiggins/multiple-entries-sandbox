# Multiple Entries Prototype

## Getting started

1. Install [Yarn](https://yarnpkg.com)
1. Clone repo using Git
1. Run `yarn install` in root of repo
1. Run `yarn workspaces run build` to build all the projects
1. Inspect the output (the `dist` folders) of each project to understand how it
   handled bundling the `custom-preact` project

## What are "multiple entries"

In this sandbox, I'm playing with

- Single npm package contiaining multiple "nested" npm packages
- Not really nested, explained later

## Repo Setup

- Explain how the repo is setup
- Describe how I'm using yarn workspaces to mimic how a consumers would
  consume the custom-preact project

## How it works

- Describe the npm resolution algorithm
