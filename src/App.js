import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Eat a schnitzel', 'Make pizza'],
    }
  }

  addItem(value) {
    const previousList = this.state.todos;

    this.setState({todos: previousList.concat(value)});
  }

  render() {
    const {todos} = this.state;

    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoList/>
      </div>
    );
  }
}
