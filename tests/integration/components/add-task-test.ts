import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-boilerplate/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-task', function (hooks) {
  setupRenderingTest(hooks);

  test('it sends task information to the parent', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AddTask @taddTask/>`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AddTask>
        template block text
      </AddTask>
    `);

    assert.dom().hasText('template block text');
  });
});
