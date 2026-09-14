
import React, { useState } from "react";
import { useTodo } from "../hooks/useToDo";

export const ToDoInput: React.FC = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!text.trim()) return;

        addTodo(text);
        setText('');
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex gap-3 mb-6">
                <input 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add you Task"
                    className="flex-1 px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50/50 
                        text-stone-700 placeholder-stone-400 outline-none 
                        focus:border-sky-300 focus:ring-2 focus:ring-sky-100 transition-all
                        dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100"
                />
                <button
                    type="submit"
                    className="px-6 py-3 rounded-2xl bg-sky-200 text-sky-900 font-medium
                        hover:bg-sky-300 active:scale-95 transition-all shadow-sm
                        dark:bg-sky-900 dark:text-sky-100 dark:hover:bg-sky-800"
                >
                    Add
                </button>
        </form>
    )
}
