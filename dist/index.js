'use strict';

var lodash = require('lodash');

function createAction (type) {
  var payloadCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash.identity;
  var metaCreator = arguments[2];

  var hasPayload = !lodash.isUndefined(payloadCreator);
  var finalPayloadCreator = lodash.isFunction(payloadCreator) ? payloadCreator : lodash.identity;
  var hasMetaCreator = lodash.isFunction(metaCreator);

  var createAction = function createAction() {
    var payload = hasPayload ? finalPayloadCreator.apply(undefined, arguments) : payloadCreator;

    var action = {
      type: type,
      error: payload instanceof Error
    };

    if (payload) {
      action.payload = payload;
    }

    if (hasMetaCreator) {
      action.meta = metaCreator.apply(undefined, arguments);
    }

    return action;
  };

  return createAction;
}

var SuffixEnum = Object.freeze({
  REQUESTED: 'REQUESTED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
});

var defaultRTSuffixes = [SuffixEnum.REQUESTED, SuffixEnum.COMPLETED, SuffixEnum.FAILED];

var sharedConfig = {
  requestSuffixes: defaultRTSuffixes
};

var createConfig = function createConfig(_ref) {
  var requestSuffixes = _ref.requestSuffixes;

  if (requestSuffixes) {
    try {
      sharedConfig.requestSuffixes = requestSuffixes;
    } catch (error) {
      console.warn('Request suffixes are already set somewhere in your code.');
    }

    // This prevents direct access and modification of shared config object
    sharedConfig = Object.freeze(sharedConfig);

    return sharedConfig;
  }
};

function createRequestTypes(base) {
  var res = {};
  var suffixes = sharedConfig.requestSuffixes;

  suffixes.forEach(function (type) {
    res[type] = base + '_' + type;
  });

  return res;
}

function createRequestActions (types) {
  var res = {};

  Object.keys(types).forEach(function (type) {
    if (Object.prototype.hasOwnProperty.call(types, type)) {
      res[type.toLowerCase()] = createAction(types[type]);
    }
  });

  return res;
}

module.exports = {
  createAction: createAction,
  createRequestTypes: createRequestTypes,
  createRequestActions: createRequestActions,
  createConfig: createConfig
};
