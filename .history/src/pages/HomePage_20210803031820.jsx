 
import React, { Component,useState } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import TasksView from '../components/TasksView';
import TaskModel from '../model/TaskModel';

function HomePage(){

    const [tasks, setTasks] = useState([]);

    return (<Container>
            <h1>ToDos</h1>
   {/* <FormComponent tasks={tasks} setTasks={setTasks}/> */}
   <TasksView key={"tView"} tasks={tasks}/>
   </Container>
);
    }

export default HomePage;