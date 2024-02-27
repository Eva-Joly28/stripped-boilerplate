import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from 'ember-boilerplate/services/store';

export default class TasksRoute extends Route {
    @service declare store : Store;

    async model(){
        let data = await this.store.findAll('task');
        return data;
    }
}
