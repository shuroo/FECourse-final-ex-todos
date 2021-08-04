import { Component } from "react";
import TaskComponent from "./TaskComponent";
 
function TasksView({tasks,filterBy}){

   
    const tasksView = (!tasks ? null : tasks.filter((task)=>filterBy(task)).map(task =>{ 
        return <TaskComponent key={task.key} task={task}/>;}));

    return tasksView;
     
}

export default TasksView;