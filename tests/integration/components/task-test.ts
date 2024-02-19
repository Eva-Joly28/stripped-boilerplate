import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-boilerplate/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task', function (hooks) {
  setupRenderingTest(hooks);

  let taskParam = {
    id : 0,
    name : 'task',
    date : "date",
    status : "pending"
  }

  function check(){
  console.log('checkButton')
}

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('taskParam',taskParam);
    this.set('checkButton',check);

    await render(hbs`<Task @task={{this.taskParam}}/>`);

    assert.dom('tr td').exists();
    assert.dom('tr#tdName').hasValue('task');

    await click('button#checkButton');
  });
});
