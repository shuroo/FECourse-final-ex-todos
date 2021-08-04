 
import React, { Component } from 'react';

 
function CompletedTasksPage({tasks}){

    return (   <TasksView tasks={tasks} setTasks={setTasks}/>);}

export default CompletedTasksPage;