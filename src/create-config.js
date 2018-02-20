import defaultRTSuffixes from './request-type-suffixes';

const createConfig = ({requestSuffixes = defaultRTSuffixes}) => {
  let config = {};
  if (requestSuffixes) {
    try {
      config.requestSuffixes = requestSuffixes;
    } catch (error) {
      console.warn('Request suffixes are already set somewhere in your code.');
    }

    // This prevents direct access and modification of shared config object
    config = Object.freeze(config);

    return config;
  }
};

export default createConfig;
