import React from "react";

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div>
        <ul>
          {todos.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    );
  }
}
