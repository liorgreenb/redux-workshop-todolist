import React from "react";
import { addTodoItem } from "../Store/Reducers/TodoList/actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        value: '',
    };
  }
  setTodoValue(event) {
    const value = event.target.value;

    this.setState({ value });
  }

  addTodoItem() {
    this.props.addTodoItem(this.state.value);
    this.setState({value: ''})
  }

  render() {
    const { todos } = this.props;
    const { value } = this.state;

    return (
      <div>
        <ul>
          {todos.map(todoItem => (
            <li key={todoItem}>{todoItem}</li>
          ))}
        </ul>
        <input
          value={value}
          onChange={event => this.setTodoValue(event)}
        />
        <button onClick={() => this.addTodoItem()}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodoItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
