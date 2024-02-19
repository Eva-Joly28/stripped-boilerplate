import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';

interface TaskSignature {
  // The arguments accepted by the component
  Args: {
    task : TaskInterface;
    deleteButton : Function;
    updateButton : Function;
    checkButton : Function;
  };

}

export default class TaskComponent extends Component<TaskSignature> {
  @action
  deleteTask(){
    this.args.deleteButton(this.args.task);
  }

  @action
  checkTask(){
    let status = "";
    if(this.args.task.status == "pending"){
      status = "completed";
    }
    else{
      status = "pending"
    }
    this.args.checkButton(this.args.task.id,status);
    console.log(this.args.task);
  }

  @action
  modifyTask(){
    this.args.updateButton(this.args.task);
    console.log("ok ici first");
  }
}
