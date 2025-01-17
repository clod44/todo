import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from '@mantine/hooks';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useLocalStorage({
        key: 'todos',
        defaultValue: [],
    });

    const getTodo = (id) => todos.find((todo) => todo.id === id);
    const addTodo = (text = "New Task") => {
        const newTodo = {
            id: uuidv4(),
            text,
            completed: false,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        console.log(newTodo);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const updateTodo = (id, text = "no details") => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, text, updatedAt: Date.now() } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    const eraseAllData = () => {
        setTodos([]);
    };

    const fillRandomData = () => {
        for (let i = 0; i < 40; i++) {
            addTodo(`Todo ${i}`);
        }
    };


    const value = {
        todos,
        getTodo,
        addTodo,
        toggleTodo,
        updateTodo,
        removeTodo,
        eraseAllData,
        fillRandomData,
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
};