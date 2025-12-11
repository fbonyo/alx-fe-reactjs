import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the heading is present
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check for input and button
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    // Get the first todo
    const firstTodo = screen.getByText('Learn React');
    
    // Initially should not have line-through
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle
    fireEvent.click(firstTodo);
    
    // Should now have line-through
    expect(firstTodo).toHaveStyle('text-decoration: line-through');
    
    // Click again to untoggle
    fireEvent.click(firstTodo);
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    // Check that initial todo exists
    const todoToDelete = screen.getByText('Learn React');
    expect(todoToDelete).toBeInTheDocument();
    
    // Find and click the delete button for the first todo
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // Check that the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    fireEvent.click(addButton);
    
    // Todo count should remain the same
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });
});

describe('AddTodoForm Component', () => {
  test('renders AddTodoForm component', () => {
    const mockAdd = jest.fn();
    render(<AddTodoForm onAdd={mockAdd} />);
    
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('calls onAdd with input value when form is submitted', () => {
    const mockAdd = jest.fn();
    render(<AddTodoForm onAdd={mockAdd} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);
    
    expect(mockAdd).toHaveBeenCalledWith('Test Todo');
  });

  test('clears input after adding todo', () => {
    const mockAdd = jest.fn();
    render(<AddTodoForm onAdd={mockAdd} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });
});
