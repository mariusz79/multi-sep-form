import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 1,
  activePlan: 1,
  yearly: false
}

const appSlice = createSlice ({
  name: 'form',
  initialState: initialState,
  reducers: {
    increment(state) {state.activeStep++},
    decrement(state) {state.activeStep--},
    setPlan(state, action) {const newPlan = action.payload; state.activePlan = newPlan},
    toggleYearly(state) {state.yearly = !state.yearly}
  }
})

const store = configureStore({
  reducer: appSlice.reducer
})

export const formActions = appSlice.actions;

export default store;