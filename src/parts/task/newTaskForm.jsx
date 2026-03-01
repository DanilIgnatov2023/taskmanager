import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from "./taskSlice";

const NewTaskForm = () => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState('Personal');
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.tasks.categories);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask(text, category));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
            <input
                type="text"
                placeholder="What are you doing?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button type="submit">Add</button>
        </form>
    );
};

export default NewTaskForm;