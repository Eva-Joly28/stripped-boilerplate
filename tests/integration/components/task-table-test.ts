import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-boilerplate/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';

module('Integration | Component | task-table', function (hooks) {
  setupRenderingTest(hooks);

  let tasks : TaskInterface[] = [];


  test('it shows all the tasks added', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('tasks',tasks);

    await render(hbs`<TaskTable @tasks={{this.tasks}}/>`);

    assert.dom('table').exists();
    assert.dom('thead').exists();
    assert.dom('table p').exists();
  });
});
