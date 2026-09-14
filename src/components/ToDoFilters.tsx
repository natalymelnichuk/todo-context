
import React from 'react';
import { useFilter } from '../hooks/useFilter';

export const ToDoFilters: React.FC = () => {
    const { filter, setFilter } = useFilter();

    const filters: { key: 'all' | 'active' | 'completed'; label: string }[] = [
        { key: 'all', label: 'All' },
        { key: 'active', label: 'Active' },
        { key: 'completed', label: 'Completed' },
    ];

    return (
        <div className="flex gap-2 my-4">
            {filters.map((f) => (
                <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                        ${filter === f.key
                            ? 'bg-sky-200 text-sky-900 shadow-sm dark:bg-sky-900 dark:text-sky-100'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
                        }`}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
};