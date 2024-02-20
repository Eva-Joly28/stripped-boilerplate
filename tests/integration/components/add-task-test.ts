import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-boilerplate/tests/helpers';
import { render, click} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';
import { set } from '@ember/object';


module('Integration | Component | add-task', function (hooks) {
  setupRenderingTest(hooks);

 let taskParam = {
    id : 0,
    name : 'task',
    date : "2003-09-28",
    status : "pending"
  }

  function addTask(this: any, taskParam: TaskInterface){
  document.querySelector('input#taskName')!!.setAttribute('value','task');
  document.querySelector('input#taskDate')!!.setAttribute('value','date');
  console.log(taskParam);
  }

  test('it sends task information to the parent', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('addTask', addTask);
    this.set('task', taskParam);

    await render(hbs`<AddTask @addTask={{this.addTask}} @updateParams={{this.task}}/>`);
    assert.dom('#taskName').exists();
    assert.dom('#taskDate').exists();


    await click('#addButton');
    assert.dom('input#taskName').hasValue('task');
    assert.dom('input#taskDate').hasValue('2003-09-28');
    //assert.ok();
  });
});
