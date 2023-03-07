import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 1,
  activePlan: 1,
  yearly: false,
  addons: []
}

const appSlice = createSlice ({
  name: 'form',
  initialState: initialState,
  reducers: {
    increment(state) {state.activeStep++},
    decrement(state) {state.activeStep--},
    setPlan(state, action) {const newPlan = action.payload; state.activePlan = newPlan},
    toggleYearly(state) {state.yearly = !state.yearly},
    handleAddons(state, action) { const addon = state.addons.includes(action.payload);
      if(!addon) {state.addons.push(action.payload)}
      else {const newAddons = state.addons.filter((a)=>a!==action.payload); state.addons = newAddons}}
  }
})

const store = configureStore({
  reducer: appSlice.reducer
})

export const formActions = appSlice.actions;

export default store;