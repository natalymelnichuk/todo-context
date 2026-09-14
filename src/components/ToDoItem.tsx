
import React from "react";
import type { ToDo } from "../types/ToDotypes";
import { useTodo } from "../hooks/useToDo";

interface ToDoItemProps {
    todo: ToDo;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {
    const {toggleTodo, deleteTodo } = useTodo();

    return (
        <div className={`flex items-center justify-between p-4 mb-3 rounded-2xl border transition-all shadow-sm
            ${todo.completed 
                ? 'bg-stone-100/60 border-stone-200 text-stone-400 dark:bg-stone-900/40 dark:border-stone-800' 
                : 'bg-white border-stone-200 text-stone-700 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100'
            }`}
        >
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5 rounded-lg border-stone-300 text-sky-400 focus:ring-sky-200 cursor-pointer"
                />
                <span className={`truncate ${todo.completed ? 'line-through text-stone-400 dark:text-stone-500' : ''}`}>
                    {todo.text}
                </span>
            </div>

            <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-3 px-3 py-1.5 rounded-xl text-stone-400 hover:text-red-500 hover:bg-red-50 
                           transition-all dark:hover:bg-stone-700/50"
                title="Delete Task"
            >
                Delete
            </button>
        </div>
    )
}

