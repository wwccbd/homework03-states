import React from 'react';
import './TaskList.css';
import { TaskInput } from '../TaskInput/TaskInput.jsx';
import { Task } from '../Task/Task.jsx';
import Logo from '../../assets/logos/todoimage.svg';
class TaskList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.timers = [];
        this.nextId = 1;
        this.state = {
            tasks: []
        }
    }

    componentWillUnmount() {
        for (const { timerId } of this.timers ) {
            clearTimeout(timerId);
        }
    }

    handleComplete = (taskId) => {
        this.setState((state) => ({
            ...state,
            tasks: this.state.tasks.map((task) => {
                if (task.id !== taskId) return task;

                return {
                    ...task,
                    isComplete: true
                }
            })
        }));

        const timerId = setTimeout(() => this.handleRemove(taskId), 4000);
        this.timers.push({timerId, taskId});
    }
    handleRemove = (taskId) => {
        this.setState((state) => ({
            ...state,
            tasks: this.state.tasks.filter((task) => task.id !== taskId)
        }));

        this.timers = this.timers.filter((timerTracker) => timerTracker.taskId === timerTracker.taskId);
    }
    handleNewTask = (taskDescription) => {
        const newTask = {
            id: String(this.nextId++),
            description: taskDescription,
            isComplete: false
        };
        this.setState((state) => ({
        ...state,
        tasks: [newTask, ...state.tasks]
        }));
    };

    render() {
        return(
            <>
                <TaskInput onNewTask={this.handleNewTask}/>
                <div className='task-list'>
                    {this.state.tasks.map((task) => (
                        <Task 
                            key={task.id} 
                            task={task} 
                            onRemove={this.handleRemove} 
                            onComplete={this.handleComplete}/>
                    ))}
                </div>
                {this.state.tasks.length === 0 && (
                    <div className='empty-tasks-container'>
                    <img className='empty-tasks-logo' src={Logo}  alt='No current tasks' />
                    <h4 className='empty-tasks-text'>No tasks yet!</h4>
                </div>
                )}
            </>

        );
    }
}

export { TaskList };