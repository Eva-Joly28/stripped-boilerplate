/* eslint-disable ember/no-runloop */
import { A } from '@ember/array';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';
import { t } from 'ember-intl';

interface TasksContainerSignature {

}

export default class TasksContainerComponent extends Component<TasksContainerSignature> {
  @tracked alertText : string = "Task added successfully";
  @tracked visibility : string = "invisible";
  @tracked tasksList : TaskInterface[] = [];
  @tracked fulltask? : TaskInterface;
  @tracked menu : string = "invisible";
  @tracked newTask : TaskInterface = {
            id : 0,
            name : "",
            date : "",
            status : ""
  };
  idCount : number = 0;
  @tracked filter: string = "all";

  @action
  onClickOutside(){
    this.menu = "invisible";
  }


    @action
    addTask(task : TaskInterface){
      this.newTask.name = "";
      this.newTask.date ="";

      const taskExist = this.tasksList.some((t) => t.name === task.name);
      // .some
      if(!taskExist){
        this.idCount +=1;
        if(task.date == ''){
          task.date = "No due date"
        }
        this.fulltask = {
            id : this.idCount,
            name : task.name,
            date : task.date,
            status : "pending"
        }
        this.tasksList =[...this.tasksList,this.fulltask]
        console.log(this.tasksList);
      }
      else{
        let updatedTask = {
          name : task.name,
          date : task.date
        }
        this.tasksList = this.tasksList.map((t) => (t=== task ? { ...t, ...updatedTask } : t));
      }

      this.visibility = "visible";
      // eslint-disable-next-line ember/no-runloop
      later(() => {this.visibility="invisible"}, 3000);
    }

    @action
    checkTask(taskId : number, status:string){
      let task : TaskInterface = this.tasksList.find(t => t.id == taskId)!;
      let updateStatus = {
        status : status
      }
      this.tasksList = this.tasksList.map((t) => (t=== task ? { ...t, ...updateStatus } : t))
      console.log(this.tasksList);
    }

    @action
    deleteAllTask(){
      this.tasksList = [];
      this.visibility = "visible";
      this.alertText = "all tasks have been deleted successfully"
      later(() => {this.visibility="invisible"}, 3000);
    }

    @action
    deleteTask(task : TaskInterface){
      this.tasksList = this.tasksList.filter((i) => i !== task)
      this.visibility = "visible";
      this.alertText = "task deleted successfully"
      later(() => {this.visibility="invisible"}, 3000);
    }

    get filteredTasks(){
      return this.tasksList.filter((t) => t.status === this.filter || this.filter === "all")
    }

    @action
    filterAll(){
      this.filter = "all";
      this.menu = "invisible";
    }

    @action
    filterPending(){
      this.filter = "pending";
      this.menu = "invisible";
    }

    @action
    filterCompleted(){
      this.filter = "completed";
      this.menu = "invisible";
    }


    @action
    updatetask(task : TaskInterface){
      this.newTask = task;
      console.log("ok ici 3rd");
      console.log(this.newTask);
    }

    @action
    menuVisibility(){
      if(this.menu == "visible"){
        this.menu = "invisible";
      }
      else{
        this.menu = "visible";
      }
      console.log(this.menu);
    }


}
