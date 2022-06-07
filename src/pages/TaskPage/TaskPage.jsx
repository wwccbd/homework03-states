import React from 'react';
import './TaskPage.css';
import { TaskList } from '../../components/TaskList/TaskList';
class TaskPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="task-header">Task list</h1>

                <TaskList />
                
            </div>
        );
    }
}

export {TaskPage };