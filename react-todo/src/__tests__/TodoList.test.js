import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    expect(input.value).toBe('');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.click(addButton);
    
    const currentTodoCount = screen.getAllByRole('listitem').length;
    expect(currentTodoCount).toBe(initialTodoCount);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    const todoItem = todoText.closest('li');
    
    expect(todoItem).toHaveClass('completed');
    
    fireEvent.click(todoText);
    expect(todoItem).not.toHaveClass('completed');
    
    fireEvent.click(todoText);
    expect(todoItem).toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const deleteButton = screen.getByTestId('delete-button-1');
    const todoToDelete = screen.getByText('Learn React');
    
    fireEvent.click(deleteButton);
    
    expect(todoToDelete).not.toBeInTheDocument();
    
    const currentTodoCount = screen.getAllByRole('listitem').length;
    expect(currentTodoCount).toBe(initialTodoCount - 1);
  });

  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Pending: 2/)).toBeInTheDocument();
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    fireEvent.change(input, { target: { value: 'Another Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument();
  });

  test('adds todo when form is submitted with Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.submit(input.closest('form'));
    
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });
});
