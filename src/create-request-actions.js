import createAction from './create-action';

export default function(types) {
  const res = {};

  Object.keys(types).forEach(type => {
    if (Object.prototype.hasOwnProperty.call(types, type)) {
      res[type.toLowerCase()] = createAction(types[type]);
    }
  });

  return res;
}
