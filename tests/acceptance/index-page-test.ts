import { currentURL,visit } from '@ember/test-helpers';
import { module, test } from 'qunit';

import { setupApplicationTest } from 'ember-boilerplate/tests/helpers';

module('Acceptance | index page', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/tasks');
    assert.strictEqual(currentURL(), '/tasks');

    assert.dom('h2').hasText('Todo List');
    assert.dom('form #taskName ').exists();
    assert.dom('table').exists();
    assert.dom('button#filterButton').exists();
    assert.dom('button#filterButton').hasText('Filter');
    assert.dom('button#deleteButton').exists();
    assert.dom('button#deleteButton').hasText('Delete all');
  });
});
