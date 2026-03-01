import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './app/root'
import TasksList from './parts/task/tasksList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <TasksList />
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App