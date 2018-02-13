function action(type, payload) {
  return (
    (typeof payload !== 'undefined') &&
      payload.constructor.name !== 'SyntheticMouseEvent'
  ) ? {type, payload} : {type};
}

function createAction(type) {
  return payload => action(type, payload);
}

module.exports = createAction;
