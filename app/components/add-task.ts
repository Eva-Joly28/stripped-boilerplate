import { action } from '@ember/object';
import { fillIn, type Target } from '@ember/test-helpers';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';

interface AddTaskComponentSignature{
  Args : {
    addTask : Function;
    updateParams : TaskInterface;
  }
}

export default class AddTaskComponent extends Component<AddTaskComponentSignature> {
  @tracked task?: Partial<TaskInterface>;

  get newTask() {
    return this.args.updateParams;
  }

  @action
  returnInputValues(event : Event){
    event.preventDefault();

    this.task = {
      id : this.newTask.id, // this.newTask.id n'existe pas et ne doit pas être créé dans le front. C'est le backend qui génére l'ID de son côté.
      name : this.newTask.name,
      date : this.newTask.date
    };
    // Si cette méthode est utilisée pour le create/update, le nommage du getter 'newTask' n'est pas correct.
    this.newTask.name = ""
    console.log(this.task.id);
    this.args.addTask(this.task);
  }
}
