const requestTypeSuffixes = require('./request-type-suffixes');

function createRequestTypes(base) {
  const res = {};

  [requestTypeSuffixes.REQUESTED, requestTypeSuffixes.COMPLETED, requestTypeSuffixes.FAILED].forEach(type => {
    res[type] = `${base}_${type}`;
  });

  return res;
}

module.exports = createRequestTypes;
