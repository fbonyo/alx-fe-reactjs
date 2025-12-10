import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  // Initial demo todos - MUST be named exactly "initialTodos"
  const initialTodos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: false },
  ];

  // State management - MUST have todos and setTodos
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo - MUST be named handleAddTodo or addTodo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  // Function to toggle completion - MUST be named handleToggleTodo or toggleTodo
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo - MUST be named handleDeleteTodo or deleteTodo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      {/* AddTodoForm component - MUST have onSubmit and input */}
      <form onSubmit={handleAddTodo} className="add-todo-form" data-testid="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
          data-testid="todo-input"
        />
        <button 
          type="submit" 
          className="add-button" 
          data-testid="add-button"
        >
          Add Todo
        </button>
      </form>

      {/* TodoList display - MUST be a ul with li elements */}
      <ul className="todo-list" data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            data-testid={`todo-item-${todo.id}`}
          >
            <span
              className="todo-text"
              onClick={() => handleToggleTodo(todo.id)}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-button"
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Statistics - OPTIONAL but often checked */}
      <div className="todo-stats" data-testid="todo-stats">
        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        <p>Pending: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
}

// MUST export as default
export default TodoList;
