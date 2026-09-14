
export interface ToDo {
    id: string | number;
    text: string;
    completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export type ThemeType = 'light' | 'dark';

export interface ToDoContextType {
    todos: ToDo[];
    addTodo: (title: string) => void;
    toggleTodo: (id: string | number) => void;
    deleteTodo: (id: string | number) => void;
    editTodo: (id: string | number, newText: string) => void;
    clearCompleted: () => void;
}

export interface FilterContextType {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export type ToDoAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: {id: string | number} }
    | { type: 'DELETE_TODO'; payload: {id: string | number} }
    | { type: 'EDIT_TODO'; payload: { id: string | number; newText: string } }
    | { type: 'CLEAR_COMPLETED' }