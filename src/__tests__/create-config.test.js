import test from 'ava';
import {createConfig} from '../../dist';

test('should set config and return it', t => {
  const config = createConfig({
    requestSuffixes: ['R', 'C', 'F']
  });

  t.deepEqual(config, {
    requestSuffixes: ['R', 'C', 'F']
  });
});
