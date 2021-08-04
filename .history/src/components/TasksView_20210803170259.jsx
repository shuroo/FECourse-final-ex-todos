import { Component } from "react";
import TaskComponent from "./TaskComponent";
 
function TasksView({tasks,filterBy}){

   //.filter(((task)=>filterBy(task)))

    const tasksView = (!tasks ? null : tasks.map(task,index =>{ 
        return <TaskComponent key={task.key+index} task={task}/>;}));

    return tasksView;
     
}

export default TasksView;