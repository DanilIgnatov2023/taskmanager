import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../parts/task/taskSlice'

export default configureStore({
    reducer: {
        tasks: taskReducer
    }
})