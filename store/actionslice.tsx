import { createSlice } from '@reduxjs/toolkit'

const actionSlice = createSlice({
  name: 'actionsheet',
  initialState: {
    actionsheet: {
        visible:false,
        title:"",
        options:[],
    }
  },
  reducers: {
    toggle: (state) => {
      state.actionsheet.visible = !state.actionsheet.visible
      state.actionsheet.title =  state.actionsheet.title
      state.actionsheet.options =  state.actionsheet.options
    },
    set: (state, action) => {
      state.actionsheet.visible = state.actionsheet.visible
      state.actionsheet.title =  action.payload.title
      state.actionsheet.options =  action.payload.options
    }
  }
})

export const { toggle, set } = actionSlice.actions

export default actionSlice.reducer

