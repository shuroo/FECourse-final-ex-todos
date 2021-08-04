import { Component } from "react";
import TaskComponent from "./TaskComponent";
 
function TasksView({tasks,filterBy,removeTask}){

   //.filter(((task)=>filterBy(task)))

    const tasksView = (!tasks ? null : tasks.map((task,index) =>{ 
        return <TaskComponent removeTask={removeTask} key={task.key} task={task}/>;}));

    return tasksView;
     
}

export default TasksView;