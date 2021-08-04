 
import React, { Component,useState } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import TasksView from '../components/TasksView';
import TaskModel from '../model/TaskModel';

function HomePage(){

    const [tasks, setTasks] = useState([]);

    function updateTasks(newTasks){
        setTasks(newTasks);
         console.log(newTasks);
    }

    return (<Container>
            <h1>ToDos</h1>
   <FormComponent tasks={tasks} setTasks={((newTasks)=>updateTasks(newTasks))}/> 
   <div>{tasks.map(t=>t.name)}</div>
   </Container>)
    }

export default HomePage;