import test from 'ava';

import {isFSA} from 'flux-standard-action';
import createAction from '../create-action';

// Constants
const SIMPLE_ACTION_CONSTANT = 'SIMPLE_ACTION_CONSTANT';

let simpleAction;

// Prepare tests
test.before(() => {
  // Create action creator without payload
  simpleAction = createAction(SIMPLE_ACTION_CONSTANT);
});

test('createActions returns valid flux standard action', t => {
  t.is(isFSA(simpleAction()), true);
});

test('createAction should return action creator with a type', t => {
  t.deepEqual(simpleAction(), {
    type: SIMPLE_ACTION_CONSTANT,
    error: false
  });
});

test('createAction should return action with custom payload', t => {
  const customPayloadAction = createAction(SIMPLE_ACTION_CONSTANT, payload => ({
    newProp: payload
  }));

  t.deepEqual(customPayloadAction('lorem ispum'), {
    type: SIMPLE_ACTION_CONSTANT,
    payload: {
      newProp: 'lorem ispum'
    },
    error: false
  });
});
