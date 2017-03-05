import React from 'react';

export default class CreateTodo extends React.Component {


  render() {
         return(
           <div>
                     <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" ref="todovalue"/>
                            <button> Create </button>
                     </form>
                     <br />
           </div>
         );
  }

  handleSubmit(e)
  {
    this.props.createTask(this.refs.todovalue.value);
     e.preventDefault();
     this.refs.todovalue.value = '';
  }
}
