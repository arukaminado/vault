import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { pauseTest, currentURL, visit } from '@ember/test-helpers';

import authPage from 'vault/tests/pages/auth';

module('Acceptance | DR secondary details', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.set('mode', 'dr');
    return authPage.login();
  });

  test('it visits the Secondary Disaster Recovery Details page', async function(assert) {
    await visit('/vault/replication-dr-promote/details');
    assert.equal(currentURL(), '/vault/replication-dr-promote/details');
  });
});
