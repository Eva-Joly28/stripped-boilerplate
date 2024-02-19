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
  myTask = this.args.task;


  @action
  deleteTask(){
    this.args.deleteButton(this.myTask);
  }

  @action
  checkTask(){
    let status = "";
    if(this.myTask.status == "pending"){
      status = "completed";
    }
    else{
      status = "pending"
    }
    this.args.checkButton(this.myTask.id,status);
    console.log(this.myTask);
  }

  @action
  modifyTask(){
    this.args.updateButton(this.myTask);
    console.log("ok ici first");
  }
}
