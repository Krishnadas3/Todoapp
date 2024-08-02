import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: " ",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  storeitems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allitems = this.state.items

    allitems.push(input)

    this.setState({
      items:allitems,
      items: [...this.state.items, input],
      input: "",
    });
  };

  deleteItem = (key) => {
    const allitems = this.state.items

    allitems.splice(key,1)

    this.setState({
        items:allitems
    })

    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };



  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeitems}>
          <h1>Todo app </h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items..."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
                
              {data}
              <i
                onClick={() => this.deleteItem(index)}
                className="fa-solid fa-trash"
              ></i>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>
          ))}
        </ul> 
      </div>
    );
  }
}

export default TodoApp;
