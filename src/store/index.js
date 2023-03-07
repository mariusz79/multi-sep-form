import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 1,
  activePlan: 1,
  yearly: false,
  addons: [],
  plansData: [
		{
			title: "Arcade",
			priceMonthly: 9,
			priceYearly: 90,
			choice: 1,
		},
		{
			title: "Advanced",
			priceMonthly: 12,
			priceYearly: 120,
			choice: 2,
		},
		{
			title: "Pro",
			priceMonthly: 15,
			priceYearly: 150,
			choice: 3,
		},
	],
  addonsData: [
		{
			title: "Online service",
			underTitle: "Access to multiplayer games",
			priceYearly: 10,
			priceMonthly: 1,
			choice: 1,
		},
		{
			title: "Larger storage",
			underTitle: "Extra 1TB of cloud save",
			priceYearly: 20,
			priceMonthly: 2,
			choice: 2,
		},
		{
			title: "Customizable Profile",
			underTitle: "Custom theme on your profile",
			priceYearly: 20,
			priceMonthly: 2,
			choice: 3,
		},
	],
  total: 9
}

const appSlice = createSlice ({
  name: 'form',
  initialState: initialState,
  reducers: {
    increment(state) {
       const chosenPlan = state.plansData.filter((p)=>p.choice===state.activePlan); 
       const planPrice = state.yearly ? chosenPlan[0].priceYearly : chosenPlan[0].priceMonthly;
 
       const chosenAddons = state.addonsData.filter((a)=>state.addons.includes(a.choice));
       
       let chosenAddonsPrice=0;
       for(let a in chosenAddons)
        // eslint-disable-next-line no-unused-expressions
        {state.yearly ? chosenAddonsPrice+=chosenAddons[a].priceYearly : chosenAddonsPrice+=chosenAddons[a].priceMonthly;}
       state.total = planPrice+chosenAddonsPrice;
       state.activeStep++},
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