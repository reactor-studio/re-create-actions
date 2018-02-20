# Introduction
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
Reduce boilerplate of your Redux actions by creating [flux-standard-actions](https://github.com/acdlite/flux-standard-action) with a set of utilities this package provides.

## TL;DR

### Table of contents
* [Install](#install)
* [Usage](#usage)
* [API](#api)
  * [createAction](#createaction)
    * [`createAction(type)`](#createactiontype)
    * [`createAction(type, payloadCreator)`](#createactiontype-payloadcreator)
    * [`createAction(type, payloadCreator, metaCreator)`](#createactiontype-payloadcreator-metacreator)
  * [createRequestTypes](#createRequestTypes)
  * []

## Install

### NPM
```bash
$ npm install re-create-actions --save
```

### Yarn
```bash
$ yarn add re-create-actions
```

## Usage
Every helper will create action that is defined in shape by Flux standard action. We decided to go with Flux standard action because it gives you definition of minimal, common standards that are human-friendly and enable
us to create assumptions about the shape of our actions.

*NOTE*: You can't disable flux standard action structure at the moment. But there is an [open issue]() for this.

## API

### createAction


## Credits
Projects was inspired by headaches given from reading bunch of boilerplates` during pull request reveiws at [reactor.studio](https://github.com/reactor-studio`).

API for this package was inspired by this awesome projects:
* [flux-standard-action](https://github.com/acdlite/flux-standard-action)
* [redux-actions](https://github.com/reduxactions/redux-actions)


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/1723170?v=4" width="100px;"/><br /><sub><b>Vedran Blazenka</b></sub>](https://www.vblazenka.com/)<br />[💻](https://github.com/reactor-studio/re-create-actions/commits?author=wedranb "Code") [📖](https://github.com/reactor-studio/re-create-actions/commits?author=wedranb "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
