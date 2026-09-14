
import React from 'react';
import { useTodo } from '../hooks/useToDo';
import { useFilter } from '../hooks/useFilter';
import { ToDoItem } from './ToDoItem';

export const ToDoList: React.FC = () => {
    const { todos } = useTodo();
    const { filter } = useFilter();

    // Filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true; // for 'all'
    });

    if (filteredTodos.length === 0) {
        return (
            <div className="text-center py-10 text-stone-400 dark:text-stone-500">
                <p>List of tasks is empty</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {filteredTodos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};