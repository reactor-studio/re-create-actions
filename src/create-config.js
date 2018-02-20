import defaultRTSuffixes from './request-type-suffixes';

let config = {
  requestSuffixes: defaultRTSuffixes
};

export const saveConfig = newConfig => {
  config = {
    ...config,
    ...newConfig
  };
};

const createConfig = req => {
  if (req && req.requestSuffixes) {
    config.requestSuffixes = req.requestSuffixes;
  }
  // This prevents direct access and modification of shared config object
  config = Object.freeze(config);
  return config;
};

export default createConfig;
