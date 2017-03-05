import React from 'react';
import _ from 'lodash';
import TodoList from './TodoList.js';
import CreateTodo from './CreateTodo.js';

const todos = [
  {
    task: "First one",
    isCompleted: false
  }
];

export default class Todos extends React.Component {

constructor(props){
  super(props)
    this.state = {
          todos
    };
}


  render() {
        return(
          <div>
           <h1> Todos App </h1>
           <CreateTodo createTask={this.createTask.bind(this)}/>

           <TodoList todos={this.state.todos}
           toggleProp={this.toggleTask.bind(this)}
           edit_task={this.editTask.bind(this)}/>

         </div>
         );
  }

  createTask(task)
  {
      this.state.todos.push({
        task,
        isCompleted: false
      });

      this.setState({
        todos: this.state.todos
      });
  }

  editTask(oldtask,newtask)
  {
      const foundtodo = _.find(this.state.todos, todo => todo.task === oldtask);
      foundtodo.task = newtask;
      this.setState({
        todos: this.state.todos
      });
    
  }

  toggleTask(task)
  {
    const foundtodo = _.find(this.state.todos, todo => todo.task === task);
    foundtodo.isCompleted = !foundtodo.isCompleted;
    this.setState({
      todos: this.state.todos
    });
  }

}
