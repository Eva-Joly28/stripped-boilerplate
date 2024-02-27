import { NextFunction, Request, Response} from "express"
import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";

export class TaskController{
    private taskRepository = AppDataSource.getRepository(Task)

    async getAllTasks(request : Request, response : Response, next : NextFunction) {
        return this.taskRepository.find()
    }
    
    async getTaskById(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const task = await this.taskRepository.findOne({
            where: { id }
        })

        if (!task) {
            return "task is not in the database"
        }
        return task
    }

    async addTask(request: Request, response: Response, next: NextFunction) {
        const { name, date, status } = request.body

        const task = Object.assign(new Task(), {
            name,
            date,
            status
        })
        
        console.log(task)
        await this.taskRepository.save(task)
        return "task added to the database"
    }

    async updateTask(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        console.log(request);
        const {name, date, status } = request.body;
        //const {status} = request.body

        let taskToUpdate = await this.taskRepository.findOneBy({ id })

        if (!taskToUpdate) {
            return "task is not in the database"
        }
        taskToUpdate.date = date
        taskToUpdate.name = name
        taskToUpdate.status = status

        await this.taskRepository.save(taskToUpdate)

        return "task has been updated"
    }

    async deleteById(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let taskTodelete = await this.taskRepository.findOneBy({ id })

        if (!taskTodelete) {
            return "task is not in the database"
        }

        await this.taskRepository.remove(taskTodelete)

        return "task has been removed"
    }

    async deleteAll(request : Request, response : Response, next : NextFunction) {
        await this.taskRepository.clear()

        return "All tasks have been removed"
    }

}