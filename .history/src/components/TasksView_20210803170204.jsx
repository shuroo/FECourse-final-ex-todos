import { Component } from "react";
import TaskComponent from "./TaskComponent";
 
function TasksView({tasks,filterBy,count}){

   //.filter(((task)=>filterBy(task)))
    const tasksView = (!tasks ? null : tasks.map(task =>{ 
        return <TaskComponent key={task.key+count} task={task}/>;}));

    return tasksView;
     
}

export default TasksView;