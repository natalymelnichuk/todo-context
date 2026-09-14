
export interface ToDo {
    id: string | number;
    text: string;
    completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export type ThemeType = 'light' | 'dark';

export interface ToDoContext {
    todos: ToDo[];
    addTodo: (title: string) => void;
    toggleTodo: (id: string | number) => void;
    deleteTodo: (id: string | number) => void;
    editTodo: (id: string | number, newText: string) => void;
    clearCompleted: () => void;
}

export interface FilterContext {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export interface ThemeContext {
    theme: ThemeType;
    toggleTheme: () => void;
}