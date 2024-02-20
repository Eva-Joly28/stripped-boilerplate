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
  console.log('checkButton');
  document.querySelector('.tdName')!!.textContent = "otherTask";
}

  test('it renders the task given', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('taskParam',taskParam);
    this.set('checkButton',check);

    await render(hbs`<Task @task={{this.taskParam}} @checkButton={{this.checkButton}}/>`);

    assert.dom('tr td').exists();
    assert.dom('.tdName').exists();

    assert.dom('.tdName').hasText('task');

    await click('#checkButton');
    assert.dom('.tdName').hasText('otherTask');
  });
});
