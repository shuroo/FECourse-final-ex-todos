 
import React, { Component } from 'react';
import TasksView from '../components/TasksView';

 
function AllTasksPage({tasks}){

    return (   <TasksView tasks={tasks} setTasks={setTasks}/>);}

export default AllTasksPage;