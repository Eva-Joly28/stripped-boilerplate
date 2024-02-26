import { action } from '@ember/object';
import Component from '@glimmer/component';

interface TasksFilterSignature {
    Args: {
      menu : string
      filter : Function
    }
  }

export default class TasksFilterComponent extends Component<TasksFilterSignature> {

    get menu(){
        return this.args.menu;
    }

    @action
    filterAll(){
        let state = "all"
        this.args.filter(state)
    }

    @action
    filterPending(){
      let state = "pending";
      this.args.filter(state)
    }

    @action
    filterCompleted(){
        let state = "completed";
        this.args.filter(state)
    }
   
}
