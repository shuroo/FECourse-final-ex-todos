 
import React, { Component } from 'react';

 
function TasksPage(){

    const [tasks, setTasks] = useState([]);
    return (<div>
    <h1>ToDos</h1>
   <FormComponent/>
    </div>
);
    }

export default TasksPage;