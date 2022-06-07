import './TaskInput.css';
import React from 'react';
import PropTypes from 'prop-types'
class TaskInput extends React.PureComponent {

    static propTypes = {
        onNewTask: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ''
        }

        this.inputRef = React.createRef();
    }

    handleChange = (e) => {

        this.setState({
            taskDescription: e.target.value
        });
    }

    handleCreate = (e) => {
        e.preventDefault();
        this.props.onNewTask(this.state.taskDescription)
        this.setState({
            taskDescription: ''
        });
        this.inputRef.current?.focus();
    }
    render() {
        return(
            <form onSubmit={this.handleChange}>
                <div className="task-input-container">
                    <input 
                        className="task-input" 
                        type="text" 
                        ref={this.inputRef}
                        value={this.state.taskDescription} 
                        onChange={this.handleChange}
                    />
                    <button 
                    className="task-create-btn" 
                    type="submit" 
                    disabled={this.state.taskDescription.trim().length === 0}
                    onClick={this.handleCreate}
                    >Create</button>
                </div>
            </form>

        );
    }
}

export { TaskInput };