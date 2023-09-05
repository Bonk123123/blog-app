import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface PostsState {
    postName: string
    content: string[]
    comments: string[]
}

// Define the initial state using that type
const initialState: PostsState = {
  postName: '',
  content: [],
  comments: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.postName += 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.postName += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.posts.value

export default postsSlice.reducer