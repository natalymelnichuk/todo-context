

import { createContext, useContext } from 'react';
import type { ToDoContextType } from '../types/ToDotypes';
import type { ToDo, ToDoAction } from "../types/ToDotypes";

//Create a context for the ToDo
export const ToDoContext = createContext<ToDoContextType | undefined>(undefined);

export const todoReducer = 
    (state: ToDo[], action: ToDoAction): ToDo[] => {
        switch (action.type) {
            case 'ADD_TODO':
                return [
                    ...state,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false
                    },
                ];
            case 'TOGGLE_TODO':
                return state.map((todo) => 
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed}
                        : todo
                );
            case 'DELETE_TODO':
                return state.filter((todo) => 
                    todo.id !== action.payload.id
                );
            case 'EDIT_TODO':
                return state.map((todo) => 
                    todo.id === action.payload.id
                        ? {...todo, text: action.payload.newText}
                        : todo
                );
            case 'CLEAR_COMPLETED':
                return state.filter((todo) => !todo.completed);
            default:
                return state;            
        }
    }


//Custom hook to use the ToDoContext
export const useTodo = (): ToDoContextType => {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
}