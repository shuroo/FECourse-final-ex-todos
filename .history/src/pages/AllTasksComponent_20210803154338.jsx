 
import React, { Component } from 'react';
import TasksView from '../components/TasksView';

 
function AllTasksComponent({tasks}){

    return (   <TasksView tasks={tasks}  />);}

export default AllTasksComponent;