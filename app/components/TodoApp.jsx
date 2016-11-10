var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ],
      todoLength: 4,
      todoText: 'Hello'
    };
  },
  handleAddTodo: function (todoText) {
    var todos = this.state.todos.slice();
    todos.push({
      id: todos.length +1,
      text: todoText
    });
    this.setState({todos: todos});
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo()}/>
      </div>
    )
  }
});

module.exports = TodoApp;