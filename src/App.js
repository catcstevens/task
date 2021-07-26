import React from 'react';
import Column from './column'
import initialData from './initial-data'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

class App extends React.Component {
  state = initialData;

  render() {
    return (
      <DragDropContext>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    );
    
  }
  
}

export default App;
