# Introduction
[![Build Status](https://travis-ci.org/reactor-studio/re-create-actions.svg?branch=master)](https://travis-ci.org/reactor-studio/re-create-actions)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)


Reduce boilerplate of your Redux actions by creating [flux-standard-actions](https://github.com/acdlite/flux-standard-action) with a set of utilities this package provides.

## TL;DR

```javascript
// actions.js
import {
  createAction,
  createRequestTypes,
  createRequestActions
} from 're-create-actions';

// Constans
const GET_GITHUB_USERS = 'GET_GITHUB_USERS';

// Create action creator
export const getGithubUsers = createAction(GET_GITHUB_USERS);
// Use: dispatch(getGithubUsers())

// Create network types/constants
const GET_GITHUB_USERS_RT = createRequestTypes('GET_GITHUB_USERS_RT');
// Use: GET_GITHUB_USERS_RT.REQUESTED, GET_GITHUB_USERS_RT.COMPLETED, GET_GITHUB_USERS_RT.FAILED

// Create actions from network types
const getGithubUsersRT = createRequestActions(GET_GITHUB_USERS_RT);
// Use: dispatch(getGithubUsersRT.requested())

```

# Install

### NPM
```bash
$ npm install re-create-actions --save
```

### Yarn
```bash
$ yarn add re-create-actions
```

# Usage
Every helper will create action that is defined in shape by Flux standard action. We decided to go with Flux standard action because it gives you definition of minimal, common standards that are human-friendly and enable
us to create assumptions about the shape of our actions.

*NOTE*: You can't disable flux standard action structure at the moment. But there is an [open issue]() for this.

# API

## createAction (type, payloadCreator, metaCreator)

#### type (required)
Type: `string`

Type for your type property in [action](https://redux.js.org/basics/actions)

#### payloadCreator (optional)
Type: `function`

Custom payload creator for action payload

#### metaCreator (optional)
Type: `function`

Custom meta creator for action


# createRequestTypes(type)

#### type
Type: `string`

Type for your request types

## Credits
Projects was inspired by headaches given from reading bunch of boilerplates during pull request reveiws at [reactor.studio](https://github.com/reactor-studio`).

API for this package was inspired by this awesome projects:
* [flux-standard-action](https://github.com/acdlite/flux-standard-action)
* [redux-actions](https://github.com/reduxactions/redux-actions)


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/1723170?v=4" width="100px;"/><br /><sub><b>Vedran Blazenka</b></sub>](https://www.vblazenka.com/)<br />[💻](https://github.com/reactor-studio/re-create-actions/commits?author=wedranb "Code") [📖](https://github.com/reactor-studio/re-create-actions/commits?author=wedranb "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1530952?v=4" width="100px;"/><br /><sub><b>Dino Trojak</b></sub>](http://reactor.studio)<br />[💻](https://github.com/reactor-studio/re-create-actions/commits?author=dinodsaurus "Code") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
