
import React, { useState } from "react";
import type { ToDo } from "../types/ToDotypes";
import { useTodo } from "../hooks/useToDo";

interface ToDoItemProps {
    todo: ToDo;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {
    const {toggleTodo, deleteTodo, editTodo } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleUpdate = () => {
        if (editText.trim() && editText !== todo.text) {
            editTodo(todo.id, editText);
        }
        setIsEditing(false);
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleUpdate();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };


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
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleUpdate}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className="flex-1 px-3 py-1 rounded-xl border border-sky-300 bg-white text-stone-700 outline-none dark:bg-stone-900 dark:text-stone-100"
                    />
                ) : (
                    <span 
                        onDoubleClick={() => setIsEditing(true)}
                        className={`truncate cursor-pointer flex-1 ${todo.completed ? 'line-through text-stone-400 dark:text-stone-500' : ''}`}
                        title="Double click to update"
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-1">
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-2.5 py-1.5 rounded-xl text-stone-400 hover:text-sky-600 hover:bg-sky-50 
                                   transition-all dark:hover:bg-stone-700/50 text-sm"
                        title="Edit"
                    >
                        ✏️
                    </button>
                )}
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2.5 py-1.5 rounded-xl text-stone-400 hover:text-red-500 hover:bg-red-50 
                               transition-all dark:hover:bg-stone-700/50 text-sm"
                    title="Delete"
                >
                    ✕
                </button>
            </div>
        </div>
    )
}

