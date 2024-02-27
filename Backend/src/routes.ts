import { TaskController } from "./controller/TaskController"
import { UserController } from "./controller/UserController"

export const Routes = [
{
    method: "get",
    route: "/tasks",
    controller: TaskController,
    action: "getAllTasks"
},

{
    method: "get",
    route: "/tasks/:id",
    controller: TaskController,
    action: "getTaskById"
},

{
    method: "post",
    route: "/tasks",
    controller: TaskController,
    action: "addTask"
},
{
    method: "patch",
    route: "/tasks/:id",
    controller: TaskController,
    action: "updateTask"
},
{
    method: "delete",
    route: "/tasks/:id",
    controller: TaskController,
    action: "deleteById"
},
{
    method: "delete",
    route: "/tasks",
    controller: TaskController,
    action: "deleteAll"
}
]
