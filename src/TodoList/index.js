import React from "react";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    setTodoValue(event) {
        const value = event.target.value;

        this.setState({value});
    }

    render() {
        const { todos, onAddItem} = this.props;
        const { value } = this.state;

        return (
            <div>
                <ul>
                    {todos.map(todoItem => (
                        <li>{todoItem}</li>
                    ))}
                </ul>
                <input onChange={event => this.setTodoValue(event)}/>
                <button onClick={() => onAddItem(value)}>Add</button>
            </div>
        )
    }
}