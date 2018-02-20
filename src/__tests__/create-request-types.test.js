import test from 'ava';

import { createRequestTypes, createConfig, config } from '../../dist';

// Constants
const SIMPLE_ACTION_CONSTANT = 'SIMPLE_ACTION_CONSTANT';
let SIMPLE_ACTION_CONSTANT_RT;

// Prepare tests
test.before(() => {
  // Create action creator without payload
  SIMPLE_ACTION_CONSTANT_RT = createRequestTypes(SIMPLE_ACTION_CONSTANT);
});

test('createRequestTypes should return a list of types with request suffixes', t => {
  t.deepEqual(SIMPLE_ACTION_CONSTANT_RT, {
    REQUESTED: SIMPLE_ACTION_CONSTANT_RT.REQUESTED,
    COMPLETED: SIMPLE_ACTION_CONSTANT_RT.COMPLETED,
    FAILED: SIMPLE_ACTION_CONSTANT_RT.FAILED
  });
});

test('createRequestTypes should return a list of types with request suffixes', t => {
  createConfig({
    requestSuffixes: ['START', 'DONE', 'FAIL']
  });

  const CUSTOM_SIMPLE_ACTION_RT = createRequestTypes('CUSTOM_SIMPLE_ACTION_RT');

  t.deepEqual(CUSTOM_SIMPLE_ACTION_RT, {
    START: CUSTOM_SIMPLE_ACTION_RT.START,
    DONE: CUSTOM_SIMPLE_ACTION_RT.DONE,
    FAIL: CUSTOM_SIMPLE_ACTION_RT.FAIL
  });
});
