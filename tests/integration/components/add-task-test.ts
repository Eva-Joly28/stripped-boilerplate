import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-boilerplate/tests/helpers';
import { render, click} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';


module('Integration | Component | add-task', function (hooks) {
  setupRenderingTest(hooks);

 let taskParam = {
    id : 0,
    name : 'task',
    date : "date",
    status : "pending"
  }

  function addTask(taskParam: TaskInterface){
    console.log(taskParam);
  }

  test('it sends task information to the parent', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('addTask', addTask);

    this.set('task', taskParam);

    await render(hbs`<AddTask @addTask={{this.addTask}} @updateParams={{this.task}}/>`);
    //await this.pauseTest();
    assert.dom('#taskName').exists();
    

    await click('#addButton');
    assert.dom('input#taskName').hasValue('task');
    assert.dom('#taskDate').hasValue('date');
    //assert.ok();

    assert.dom().hasText('template block text');
  });
});
