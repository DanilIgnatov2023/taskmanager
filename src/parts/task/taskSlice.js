import { createSlice, nanoid } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        items: [],
        categories: ['All', 'Work', 'Personal', 'Study','Routine'],
        currentFilter: 'All',
    },
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (text, category) => ({
                payload: {
                    id: nanoid(),
                    text,
                    category: category || 'Personal',
                    completed: false,
                    createdAt: new Date().toLocaleString(),
                },
            }),
        },
        toggleTask: (state, action) => {
            const todo = state.items.find(item => item.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        clearCompleted: (state) => {
            state.items = state.items.filter(item => !item.completed);
        },
        setFilter: (state, action) => {
            state.currentFilter = action.payload;
        }
    },
});

export const { addTask, toggleTask, clearCompleted, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
