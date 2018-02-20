import defaultRTSuffixes from './request-type-suffixes';
import requestTypeSuffixes from './request-type-suffixes';

export let sharedConfig = {
  requestSuffixes: defaultRTSuffixes
}

const createConfig = ({ requestSuffixes }) => {
  if (requestSuffixes) {
    try {
      sharedConfig.requestSuffixes = requestSuffixes;
    } catch (error) {
      console.warn('Request suffixes are already set somewhere in your code.')
    }

    // This prevents direct access and modification of shared config object
    sharedConfig = Object.freeze(sharedConfig)

    return sharedConfig;
  }
}

export default createConfig;
