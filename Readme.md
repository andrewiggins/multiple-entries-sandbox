# Multiple Entries Prototype

## Getting started

1. Install [Yarn](https://yarnpkg.com)
1. Clone repo using Git
1. Run `yarn install` in root of repo
1. Run `yarn workspaces run build` to build all the projects
1. Inspect the output (the `dist` folders) of each project to understand how it handled bundling
   the `custom-preact` project

## What are "multiple entries"

In this sandbox, I'm playing with the concept of muliple entries. "Multiple entires" refers to the
idea of a single npm package containing multiple "nested" `package.json` files. We'll explain later
how these aren't really "nested".

Node's module resolution algorithm is generic enough to allow for an npm package to contain
multiple `package.json`s and resolve them independently. Conceptually, an npm package is just a
collection of files rooted at a single `package.json`. If one of the files in the package is
another `package.json`, then npm doesn't care (or I think shouldn't care, I haven't tested this
yet). When importing a module, node doesn't care how the module is layed out as long as the module
id (e.g. `require("module-id")`) can be resolved to a JS file using following its resolution
algorithm.

## Node's resolution algorithm

The entire algorithm is [documented in Node's `resolve`
doc](https://nodejs.org/api/modules.html#modules_all_together). I'll describe the relevant pieces
here. For this description we'll focus importing a module from the `node_modules` folder, though
importing relative files works very similarly. Below is a simplified version of the resolution
algorithm for loading a module from `node_modules`.

Given a `module-id` (e.g. `require("module-id")`) from a `require` call:

1. LET `DIR` = the appropriate `node_modules` directory to load from
2. IF `DIR/module-id.js` is a file, load it as JavaScript file. END.
3. IF `DIR/module-id` is a directory:
   1. IF `DIR/module-id/package.json` is a file, LET `M` = the value of the `main` field
      1. IF `M.js` is a file, load it as a JavaScript file. END.
      2. IF `M/index.js` is a file, load it as JavaScript file. END.
   2. IF `DIR/module-id/index.js` is a file, load it as a JavaScript file. END.

What makes allows multiple entries to work in the above algorithm is that a `module-id` is really
just a partial path that appended to the `node_modules` path. Often times it is just a reference to
a folder inside of the `node_modules` (e.g. `require('preact')`). However it could be any path
under `node_modules` and the same algorithm that applies to a simple module id applies to the fully
qualified path (e.g. `require('preact/hooks')`).

## Bundlers

Bundlers parse JavaScript files for `import` or `require` statements and also resolve the module
id's to their files. Every bundler I've checked so far implements the same resolution algorithm as
Node. So bundlers will properly resolve a package that contains multiple entry points. Below is a
mapping of each bundler (and static analyzer) to its resolution algorithm.

- `webpack` -> [`enhanced-resolve`](https://www.npmjs.com/package/enhanced-resolve)
- `parcel` -> [`resolve`](https://www.npmjs.com/package/resolve)
- `rollup-plugin-node-resolve` -> [`resolve`](https://www.npmjs.com/package/resolve)
- `typescript` -> [custom
  implementation](http://www.typescriptlang.org/docs/handbook/module-resolution.html#node)

## Repo Setup

This repo uses yarn workspaces to enable sample projects to consume a `custom-preact` package. The
`custom-preact` is a demo project that shows how preact could be organized to utilize multiple
entries. All the projects in `sample-projects` demonstrate how a project using various bundlers and
static analyzers can consume the `custom-preact` project.

None of the consumption methods required any special config and all that support tree-shaking were
properly tree-shook.

## When to use multiple entries

- When separate packages for different parts may be too heavy handed (TODO: Expand)

## Downsides

- Since all entries share the same package.json, they share a common dependency list which may not work for some projects. For example, people value Preact having no dependencies where it might be important for preact-render-to-string to have some dependencies so perhaps preact-render-to-string should stay its own package.

## TODO

- Expand explanation of how projects consume `custom-preact` and how the algorithm walks applies to
  these examples
