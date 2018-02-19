# Introduction
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
Projects was inspired by headaches given from reading bunch of boilerplates` during pull request reveiws at [`reactor.studio`](https://reactor.studio).

API for this package was inspired by this awesome projects:
* [flux-standard-action](https://github.com/acdlite/flux-standard-action)
* [redux-actions](https://github.com/reduxactions/redux-actions)
