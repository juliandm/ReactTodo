var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });
  describe('setTodos', ()=>{
    it('should set valid Todos Array ', ()=>{
      var todos = [{
        id: 23,
        text: 'something',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos)
    });
    it('should not set invalid todos array',()=>{
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null)
    })
  });
  describe('getTodos', ()=>{
    it('should return empty array on not set Data', ()=>{
      var actualTodos =  TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    })
  });
  describe('filter Todos',()=>{
    var todos = [{
      id:1,
      text: 'Some One',
      completed: true,
    },{
      id:2,
      text: 'Some Two',
      completed: true,
    },{
      id:3,
      text: 'Some Three',
      completed: false,
    }];

    it('should return all items when showCompleted is true', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should not return all items when showCompleted is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    })
    it('should sort by completed status',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false)
    })
    it('should find',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'two');
      expect(filteredTodos.length).toBe(1)
    })
    it('should return everything if did not find',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3)
    })
  })
});