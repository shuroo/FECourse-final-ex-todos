 
import React, { Component } from 'react';

 
function TasksPage({tasks}){

    return (   <TasksView tasks={tasks} setTasks={setTasks}/>);}

export default TasksPage;