import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    habitName: "First Habit",
    habitData: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
    ],
  },
];

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabbit: (state, action) => {
      console.log("action", action);
      state.push({
        id: Math.floor(Math.random() * 99999),
        habitName: action.payload,
        habitData: null,
      });
    },
    removeHabit: (state, action) => {
      state;
    },
  },
});

export default habitSlice.reducer;
export const { addHabbit } = habitSlice.actions;
