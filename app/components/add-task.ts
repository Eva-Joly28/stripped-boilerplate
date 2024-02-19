import { action } from '@ember/object';
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
  @tracked declare task : {};
  get newTask() {
    return this.args.updateParams;
  }
  
  @action
  returnInputValues(event : Event){
    event.preventDefault();
    
    this.task = {
      name : this.newTask.name,
      date : this.newTask.date
    };

    this.args.addTask(this.task);
    console.log(this.task)
  }
}
