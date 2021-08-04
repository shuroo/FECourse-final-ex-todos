 
import React, { Component,useState } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import TasksView from '../components/TasksView';
import FooterBar from '../components/UpperBar';
import TaskModel from '../model/TaskModel';

function HomePage(){

    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    function updateTasks(){
        const newTaskName = document.getElementById("tasksAddInput").value;  
        const taskToAdd = new TaskModel(newTaskName,false); 
        const tasksCpy = [...tasks];
        tasksCpy.push(taskToAdd); 
        setTasks(tasksCpy);
        setCount(count + 1); 
         
    }

    return (<Container>
            <h1>ToDos</h1>
   <FormComponent tasks={tasks} setTasks={updateTasks}/> 
   <FooterBar />
   </Container>)
    }

export default HomePage;