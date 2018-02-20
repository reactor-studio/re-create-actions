import {sharedConfig as config} from './create-config';

function createRequestTypes(base) {
  const res = {};
  const suffixes = config.requestSuffixes;

  suffixes.forEach(type => {
    res[type] = `${base}_${type}`;
  });

  return res;
}

export default createRequestTypes;
