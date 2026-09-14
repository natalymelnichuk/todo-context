import React from 'react';
import { AppProviders } from './context/AppProviders';
import { ToDoInput } from './components/ToDoInput';
import { ToDoFilters } from './components/ToDoFilters';
import { ToDoList } from './components/ToDoList';
import { useTheme } from './hooks/useTheme';

const MainApp: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 py-10 px-4 ${theme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-800'}`}>
            <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-stone-200/80 dark:bg-stone-900/80 dark:border-stone-800">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all
                                   dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                        title="Toggle theme"
                    >
                        {theme === 'light' ? 'dark' : 'light'}
                    </button>
                </div>

                {/* Input form */}
                <ToDoInput />

                {/* Filter */}
                <ToDoFilters />

                {/* List */}
                <ToDoList />
            </div>
        </div>
    );
};

export const App: React.FC = () => {
    return (
        <AppProviders>
            <MainApp />
        </AppProviders>
    );
};

export default App;
