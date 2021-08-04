 
import React, { Component,useState } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import TasksView from '../components/TasksView';
import TaskModel from '../model/TaskModel';

function HomePage(){

    const [tasks, setTasks] = useState([new TaskModel("taskRandName",false)]);

    function updateTasks(newTasks){
        setTasks(newTasks);
        alert('SIZE???'+newTasks.length);
    }

    return (<Container>
            <h1>ToDos</h1>
   { <FormComponent tasks={tasks} setTasks={((newTasks)=>updateTasks(newTasks))}/> }
   <TasksView tasks={tasks}/>
   </Container>
);
    }

export default HomePage;