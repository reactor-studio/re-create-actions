import test from 'ava';
import createAction from '../create-action';
import createRequestTypes from '../create-request-types';
import createActionsFromTypes from '../create-actions-from-types';

// Constants
const SIMPLE_ACTION_CONSTANT = 'SIMPLE_ACTION_CONSTANT';

let simpleAction;
let SIMPLE_NETWORK_CONSTANT_RT;
let simpleActionConstantRT;

// Prepare tests
test.before(() => {
  // Create action creator without payload
  simpleAction = createAction(SIMPLE_ACTION_CONSTANT);

  // Create network constants with suffixes
  SIMPLE_NETWORK_CONSTANT_RT = createRequestTypes('SIMPLE_NETWORK_CONSTANT_RT');

  // Create action creators from network constants
  simpleActionConstantRT = createActionsFromTypes(SIMPLE_NETWORK_CONSTANT_RT);
});

test('createAction should return action creator with a type', t => {
  t.deepEqual(simpleAction(), {
    type: SIMPLE_ACTION_CONSTANT
  });
});

test('createRequestTypes should return a list of types with request suffixes', t => {
  t.deepEqual(SIMPLE_NETWORK_CONSTANT_RT, {
    REQUESTED: SIMPLE_NETWORK_CONSTANT_RT.REQUESTED,
    COMPLETED: SIMPLE_NETWORK_CONSTANT_RT.COMPLETED,
    FAILED: SIMPLE_NETWORK_CONSTANT_RT.FAILED
  });
});

test('createActionsFromTypes should return a list of action creators with request types', t => {
  t.deepEqual(simpleActionConstantRT.requested(), {
    type: SIMPLE_NETWORK_CONSTANT_RT.REQUESTED
  });
});
