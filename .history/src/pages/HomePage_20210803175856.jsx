 
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

  

function HomePage(){

    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const defaultFilter = (()=>true);
    const [filterBy, setFilterBy] = useState((()=>true));
    const [taskToRemove, setTaskToRemove] = useState("");

    // const [filteredTasks, setFilteredTasks] = useState(tasks);


    function updateTasks(){
        const newTaskName = document.getElementById("tasksAddInput").value;  
        const taskToAdd = new TaskModel(newTaskName,false); 
        const tasksCpy = [...tasks];
        tasksCpy.push(taskToAdd); 
        useEffect(() => {
        setTasks(tasksCpy);
        },[tasks]);
        setCount(count + 1); 
         
    }

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

    // useEffect(() => {
    //     removeTask(taskToRemove);
    //   }, [taskToRemove]) 

    return (<Container>
            <h1>ToDos</h1>
            <FormComponent tasks={tasks} setTasks={updateTasks}/> 
            <TasksView tasks={tasks} removeTask={setTaskToRemove} filterBy={filterBy}/>
            {/* <FooterBar filterBy={filterBy} updateFilter={changeFilterView} /> */}
            </Container>
      
            )
    }

export default HomePage;