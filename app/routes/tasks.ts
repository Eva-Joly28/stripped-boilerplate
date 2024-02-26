import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from 'ember-boilerplate/services/store';

export default class TasksRoute extends Route {
    @service declare store : Store;
    get tasksArray(){
        return this.store.findAll('task');
    }

    async model(){
        // let response = await fetch('http://localhost:3000/tasks/');
        // let data = await response.json();
        // return data;
        let data = await this.store.findAll('task');
        console.log(data);
        return this.tasksArray;
        
    }
}
