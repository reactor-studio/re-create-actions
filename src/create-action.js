import {identity, isFunction, isUndefined} from 'lodash';

export default function (type, payloadCreator = identity, metaCreator) {
  const hasPayload = !isUndefined(payloadCreator);
  const finalPayloadCreator = isFunction(payloadCreator) ? payloadCreator : identity;
  const hasMetaCreator = isFunction(metaCreator);

  const createAction = (...args) => {
    const payload = hasPayload ? finalPayloadCreator(...args) : payloadCreator;

    const action = {
      type,
      error: payload instanceof Error
    };

    if (payload) {
      action.payload = payload;
    }

    if (hasMetaCreator) {
      action.meta = metaCreator(...args);
    }

    return action;
  };

  return createAction;
}

