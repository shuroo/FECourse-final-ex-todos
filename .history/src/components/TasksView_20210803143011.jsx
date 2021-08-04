import { Component } from "react";
import TaskComponent from "./TaskComponent";
 
function TasksView({tasks,setTasks}){

   
    const tasksView = tasks.map(task =>{ 
        console.log('task:'+task.key);
        return <TaskComponent key={task.key} task={task}/>;});

    return tasksView;
     
}

export default TasksView;