import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask, setFilter } from './taskSlice'

const TasksList = () => {
    const { items, categories, currentFilter } = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const filteredTasks = items.filter(task => {
        if (currentFilter === 'All') return true;
        return task.category === currentFilter;
    });

    return (
        <div>
            <h2>Tasks</h2>
            <div>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => dispatch(setFilter(cat))}
                        disabled={currentFilter === cat}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        <span>{task.text}</span>
                        <small> ({task.category})</small>
                    </li>
                ))}
            </ul>
            {filteredTasks.length === 0 && <p>Empty</p>}
        </div>
    )
}

export default TasksList;