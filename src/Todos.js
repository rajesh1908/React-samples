import React from "react";
import TodoItem from "./TodoItem";
import Todosdata from "./components/todosdata";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: Todosdata
    };
    this.handleChanged = this.handleChanged.bind(this);
  }

  handleChanged(id) {
    this.setState(prevState => {
      const updatetodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.Completed = !todo.Completed;
        }
        return todo;
      });
      return {
        todos: updatetodos
      };
    });
  }

  render() {
    const todoitems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChanged={this.handleChanged} />
    ));
    return <div className="todo-list">{todoitems}</div>;
  }
}

// function Todos() {
//   const todoitems = Todosdata.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   return <div className="todo-list">{todoitems}</div>;
// }

export default Todos;
