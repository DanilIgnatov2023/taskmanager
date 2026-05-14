import { Outlet } from 'react-router-dom'
import NewTaskForm from '../parts/task/newTaskForm'
import { useSelector, useDispatch } from 'react-redux'
import { clearCompleted } from '../parts/task/taskSlice'

function Root() {
    const tasks = useSelector(state => state.tasks.items);
    const dispatch = useDispatch();

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <div style={{ flex: 1 }}>
                <h3>New Task</h3>
                <NewTaskForm />
                <hr />
                <h3>Statistics</h3>
                <div>All Tasks: {total}</div>
                <div>Ready: {completed}</div>
                <div>At Work: {total - completed}</div>
                {completed > 0 && (
                    <button onClick={() => dispatch(clearCompleted())}>
                        Delete Ready Tasks
                    </button>
                )}
            </div>
        </div>
    )
}

export default Root
