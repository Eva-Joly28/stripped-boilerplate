/* eslint-disable ember/no-runloop */
import { destroy } from '@ember/destroyable';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { TaskInterface } from 'ember-boilerplate/interfaces/task-interface';
import type Store from 'ember-boilerplate/services/store';

interface TasksContainerSignature {
  Args: {
    tasksArray : TaskInterface[];
  }
}

export default class TasksContainerComponent extends Component<TasksContainerSignature> {
  @service store? : Store;
  @tracked alertText : string = "Task added successfully";
  @tracked visibility : string = "invisible";
  @tracked tasksList : TaskInterface[] = [...this.args.tasksArray]??[]
  @tracked fulltask? :  Partial<TaskInterface>;
  @tracked menu : string = "invisible";
  @tracked newTask : TaskInterface = {
            name : "",
            date : "",
            status : ""
  };
  idCount : number = 0;
  @tracked filter: string = "all";

    @action
    addTask(task : TaskInterface){
      const taskExist = this.args.tasksArray.some((t) => t.id === task.id);
      // .some
      if(!taskExist){
        if(task.date == ''){
          task.date = "No due date"
        }

        this.fulltask = {
            name : task.name,
            date : task.date,
            status : "pending"
        }
        this.store?.createRecord('task',this.fulltask).save();
        this.newTask = {
          name : "",
          date : "",
          status : ""
        }
        this.tasksList = [task,...this.tasksList]

        this.visibility = "visible";
        // eslint-disable-next-line ember/no-runloop
        later(() => {this.visibility="invisible"}, 3000);
      }

      else{
        let updatedTask = {
           name : task.name,
           date : task.date
        }

        this.store?.findRecord('task',task.id!).then(function(task){
          task.name = updatedTask.name;
          task.date = updatedTask.date;
          console.log(task);
          task.save();
        });
      }  
    }

    @action
    checkTask(taskId : number, status:string){ 
      this.store?.findRecord('task',taskId).then(function(task){
          const param = {status : status };
          task.status = status;
          task.save(param);
      });   

    }

    @action
    deleteAllTask(){
      this.args.tasksArray.map((task) => this.store?.peekRecord('task',task.id!).destroyRecord() )
      this.tasksList.splice(0, this.tasksList.length)
      this.tasksList = [...this.tasksList]
      this.visibility = "visible";
      this.alertText = "all tasks have been deleted successfully"
      later(() => {this.visibility="invisible"}, 3000);
    }

    @action
    deleteTask(task : TaskInterface, index : number){
      const myTask = this.store?.peekRecord('task',task.id!);
      myTask.destroyRecord();
      this.visibility = "visible";
      this.alertText = "task deleted successfully"
      later(() => {this.visibility="invisible"}, 3000);
      this.filter = "all"
      this.tasksList.splice(index, 1);
      console.log(index)
      this.tasksList = [...this.tasksList]
    }

    get filteredTasks(){
      return this.tasksList?.filter((t) => t.status === this.filter || this.filter === "all")
    }

    @action
    filtering(state : string){
      this.filter = state;
      this.menu = "invisible"
    }

    @action
    updatetask(task : TaskInterface){
      this.newTask = task;
    }

    @action
    menuVisibility(){
      if(this.menu == "visible"){
        this.menu = "invisible";
      }
      else{
        this.menu = "visible";
      }
    }

}
