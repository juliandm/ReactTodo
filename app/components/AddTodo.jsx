var React = require('react');

var TodoAdd = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.textInput.value;
    if(text.length > 0){
      this.refs.textInput.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }

  },
  render: function () {
    return (
      <div>
        <form action="" ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="textInput" placeholder="Enter Text"/>
          <button className="button" type="submit">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoAdd;