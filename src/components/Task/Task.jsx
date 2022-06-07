import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import  garbageIcon from '../../assets/icons/iconTrash.svg'
class Task extends React.PureComponent {
    static propTypes = {
        task: PropTypes.shape({
            isComplete: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired,
        onComplete: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired
    };

    handleChange = (e) => {
        const { task, onComplete } = this.props;
        if (e.target.checked) {
            onComplete(task.id);
        }

    }

    handleRemove = () => {
        const { task, onRemove } = this.props;
        onRemove(task.id);
    }
    render() {

        const { task } = this.props;
        var taskClasses = classNames('task', { 'task-complete': task.isComplete });

        return (
            <div className={taskClasses}> 
                <input 
                className="task-checkbox" 
                type="checkbox" 
                checked={task.isComplete} 
                onChange={this.handleChange}>
                </input>
                <div className='task-description'>{task.description}</div>
                <img 
                className='task-remove-icon' 
                src={garbageIcon} 
                onClick={this.handleRemove} 
                alt="Remove task"
                />
            </div>
        )

        


    }
}

export { Task };