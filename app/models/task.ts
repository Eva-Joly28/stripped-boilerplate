import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
    @attr() iD?: number;
    @attr() name? : string;
    @attr() date? : string;
    @attr() status?: string;
}
