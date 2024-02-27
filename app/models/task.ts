import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
    @attr() iD?: number; // Mentionner l'id dans le modèle n'est pas nécessaire. Celui-ci est présent pas défaut.
    @attr() name? : string;
    @attr() date? : string;
    @attr() status?: string;
}
