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

    isVisible : string = "visible";
    tasks : TaskInterface[] = this.args.tasks;


    @action
    receiveArray(){
        if(this.tasks.length > 0){
            this.isVisible = "invisible";
        }
        else{
            this.isVisible = "visible";
        }
    }

    get emptyVisibility(){
        this.receiveArray();
        return this.isVisible;
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
