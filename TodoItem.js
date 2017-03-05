import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isEditing: false
      };
    }

      displayButtons()
      {
        if(this.state.isEditing)
        {
          return(
            <span>

            <button onClick={this.handleSave.bind(this)}> Save</button>
            <button onClick={this.toSave.bind(this)}> Cancel Edit </button>
            </span>
          );
        }
        return(
          <span>
          <button onClick={this.toEdit.bind(this)} > Edit</button>
          <button> Cancel  </button>
          </span>
        );
      }

      taskwithColor()
      {
        const {task, isCompleted} = this.props;
            const taskStyle = {
              color: isCompleted?  'green':'red'
            };

                if(this.state.isEditing)
                {
                       return(
                             <td>
                               <form onSubmit={this.handleSave.bind(this)}>
                                <input type="text" defaultValue={task}
                                ref="editedInput" />
                               </form>
                            </td>
                         );
                  }

             return(
                 <td style={taskStyle} onClick=
                 {this.props.toggleProp.bind(this, task)}>{this.props.task}
                 </td>
             );
       }



    render()
      {
           return(
           <tr>
             {this.taskwithColor()}
             <td> </td>
             <td> {this.displayButtons()} </td>
            </tr>
           );
      }

     handleSave(event)
     {
       event.preventDefault();
       const oldtask = this.props.task;
       const newtask = this.refs.editedInput.value;
        this.props.edit_task(oldtask,newtask);
        this.setState({
          isEditing: false
        });
     }

      toEdit()
      {
        this.setState({isEditing: true});
      }

      toSave()
      {
            this.setState({isEditing: false});
      }

}
