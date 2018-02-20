import test from 'ava';

import createRequestTypes from '../create-request-types';
import createRequestActions from '../create-request-actions';

test('should return valid action creators for request types', t => {
  const SIMPLE_ACTION_RT = createRequestTypes('SIMPLE_ACTION_RT');
  const simpleActionRT = createRequestActions(SIMPLE_ACTION_RT);

  t.deepEqual(simpleActionRT.requested(), {
    type: 'SIMPLE_ACTION_RT_REQUESTED',
    error: false
  });
});
