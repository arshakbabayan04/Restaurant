import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food, Category, Set } from '../../types';

interface foodState {
    foods: Food[]
    categories: Category[]
    sets: Set[]
}

const initialState: foodState = {
    foods: [
        {
            id: '1',
            name: 'pizza',
            price: '10',
            descr: 'Very nice pizza',
            category: 'fastfood'
        },
        {
            id: '2',
            name: 'Bounty',
            price: '3',
            descr: 'Very nice sweet',
            category: 'sweet'
        },
        {
            id: '3',
            name: 'Cola',
            price: '10',
            descr: 'Very nice sweet',
            category: 'sweet'
        },

    ],
    categories: [
        {
            id: '1',
            name: 'Fastfood'
        },
        {
            id: '2',
            name: 'Sweet'
        },
        {
            id: '3',
            name: 'Drink'
        }
    ],
    sets: [

    ]
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Food>) => {
            state.foods.push(action.payload)
        },
        addSet: (state, action: PayloadAction<Set>) => {
            state.sets.push(action.payload)
        }
    }
})

export default foodSlice.reducer;

export const { add, addSet } = foodSlice.actions