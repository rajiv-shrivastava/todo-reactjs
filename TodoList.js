import React from 'react';
import _ from 'lodash';
import TodoItem from './TodoItem.js';
import TodoHead from './TodoHead.js';

export default class TodoList extends React.Component {

renderItems(){
     const props = _.omit(this.props,'todos');

      return _.map(this.props.todos, (todo, index) => <TodoItem key={index
      } {...todo} {...props} />);
}

  render() {
         return(
           <table>
             <thead>
               <TodoHead />
             </thead>
             <tbody>

                {this.renderItems()}
              </tbody>
             </table>

         );
  }
}
