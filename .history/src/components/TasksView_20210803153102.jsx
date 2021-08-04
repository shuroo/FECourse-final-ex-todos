import { Component } from "react";
import TaskComponent from "./TaskComponent";
 
function TasksView({tasks}){

   
    const tasksView = (!tasks ? null : tasks.map(task =>{ 
        return <TaskComponent key={task.key} task={task}/>;}));

    return tasksView;
     
}

export default TasksView;