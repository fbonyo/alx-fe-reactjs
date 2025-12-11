import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders TodoList component with initial todos', () => {
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

  test('adds a new todo when form is submitted', () => {
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check input is cleared
    expect(input.value).toBe('');
  });

  test('toggles todo completion status when clicked', () => {
    // Get the first todo
    const firstTodo = screen.getByText('Learn React');
    
    // Initially should not have line-through (not completed)
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle to completed
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(firstTodo);
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo when delete button is clicked', () => {
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
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    fireEvent.click(addButton);
    
    // Todo count should remain the same
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });
});
