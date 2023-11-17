import { configureStore } from '@reduxjs/toolkit'
import food from '../components/addNewFood/foodSlice';

const store = configureStore({
    reducer: { food },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;