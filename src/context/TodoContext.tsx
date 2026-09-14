
import React, { useReducer, useEffect } from "react";
import { ToDoContext, todoReducer } from "../hooks/useToDo";

export const TodoProvider: React.FC<{ children: React. ReactNode}> = ({children}) => {
    //Initialize state from localStorage
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    //Save todos if something was changed
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    //Function for call from component
    const addTodo = (text: string) => {
        dispatch({ type: 'ADD_TODO', payload: text})
    };

    const toggleTodo = (id: string | number) => {
        dispatch({ type: 'TOGGLE_TODO', payload: {id}});
    };

    const deleteTodo = (id: string | number) => {
        dispatch ({ type: 'DELETE_TODO', payload: {id}});
    };

    const editTodo = (id: string | number, newText: string) => {
        dispatch ({ type: 'EDIT_TODO', payload: {id, newText}});
    };

    const clearCompleted = () => {
        dispatch ({ type: 'CLEAR_COMPLETED' });
    };

    return (
        <ToDoContext.Provider 
            value={{
                todos,
                addTodo,
                toggleTodo,
                deleteTodo,
                editTodo,
                clearCompleted
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

