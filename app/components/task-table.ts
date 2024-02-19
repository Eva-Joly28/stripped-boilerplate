import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';

interface TaskTableSignature {
    // The arguments accepted by the component
    Args: {
      validateTask : Function;
      deleteTask : Function;
      modifyTask : Function;
      tasks : TaskInterface[];
    };
}

export default class TaskTableComponent extends Component<TaskTableSignature> {
    get emptyVisibility(){
      return this.args.tasks.length > 0 ? "invisible" : "visible";
    }

    @action
    checkButton(taskId : number,status:string){
        this.args.validateTask(taskId,status);
        console.log(taskId);
        console.log(status);
    }

    @action
    deleteButton(task : TaskInterface){
        this.args.deleteTask(task);
    }

    @action
    updateTask(task : TaskInterface){
        this.args.modifyTask(task);
        console.log("ok ici 2nd");
    }
}
