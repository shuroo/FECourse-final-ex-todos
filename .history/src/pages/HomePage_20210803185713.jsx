 
import React, { Component,useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import FooterBar from '../components/FooterBar';
import TaskModel from '../model/TaskModel';

import ActiveTasksComponent from '../components/ActiveTasksComponent'; 
import CompletedTasksComponent from '../components/CompletedTasksComponent';
import AllTasksComponent from '../components/AllTasksComponent'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TasksView from '../components/TasksView';
import TaskComponent from '../components/TaskComponent';

  

function HomePage(){

    const [tasks, setTasks] = useState([]);
    const [taskToAdd, setTaskToAdd] = useState("");
    const defaultFilter = (()=>true);
    const [filterBy, setFilterBy] = useState((()=>true));
    const [taskToRemove, setTaskToRemove] = useState("");

    // const [filteredTasks, setFilteredTasks] = useState(tasks);


    function updateTasks(){
        const newTaskName = taskToAdd;//document.getElementById("tasksAddInput").value;  
        const taskToAdd = new TaskModel(newTaskName,false); //todo: add key?
        const tasksCpy = [...tasks];
        tasksCpy.push(taskToAdd); 
        setTasks(tasksCpy);
         
    }

    useEffect(() => {
        updateTasks();
     }, [taskToAdd]) 

    function changeFilterView(value){

        alert(value);
        const updatedFilter = ((value === 'Completed') ? ((task)=>task.isDone()) : (value==='Active' ? ((task)=>!task.isDone()) : defaultFilter ));
        console.log(updatedFilter);
        setFilterBy(updatedFilter);
    }

    // useEffect(() => {
    //     tasks
    // }, [filterBy]) 

    function removeTask(task){
        const tasksCpy = [...tasks];
        tasksCpy.splice(task); 
        setTasks(tasksCpy);
    }

    useEffect(() => {
        console.log(taskToRemove);
        removeTask(taskToRemove);
      }, [taskToRemove]) 


    const tasksView = (!tasks ? null : tasks.map((task,index) =>{ 
        return <TaskComponent removeTask={removeTask} key={task.key+index} task={task}/>;}));

    return (<Container>
            <h1>ToDos</h1>
            <FormComponent tasks={tasks} setTasks={setTaskToAdd}/> 
            {tasksView}       
            {/* <FooterBar filterBy={filterBy} updateFilter={changeFilterView} /> */}
            </Container>
      
            )
    }

export default HomePage;