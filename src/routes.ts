import { TaskController } from "./controller/TaskController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
},
{
    method: "get",
    route: "/tasks",
    controller: TaskController,
    action: "getAllTasks"
},

{
    method: "get",
    route: "/task/:id",
    controller: TaskController,
    action: "getTaskById"
},

{
    method: "post",
    route: "/task",
    controller: TaskController,
    action: "addTask"
},
{
    method: "put",
    route: "/task/:id",
    controller: TaskController,
    action: "updateTask"
}, 
{
    method: "delete",
    route: "/task/:id",
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