import { click, currentURL,fillIn,visit, type Target } from '@ember/test-helpers';
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

  const task = document.getElementById('taskName') as Target;
  // fillIn('#taskName', "ma tache")
  fillIn(task, "ma tache")
  const date = document.getElementById('taskDate') as Target;
  fillIn(date,"2003-09-28")

  await click('#addButton');

  assert.dom(".tdName").exists();
  assert.dom(".tdName").hasText('ma tache');

  await click('#deleteButton');
  assert.dom(".tdName").doesNotExist();

  });
});
