import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    habitName: "First Habit",
    habitData: [
      { date: 1, data: 13000 },
      { date: 2, data: 16500 },
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
    addData: (state, action) => {
      console.log("action", action);
      const index = state.findIndex((habit) => habit.id === action.payload.id);
      state[index].habitData.push(action.payload.habitData);
    },
    removeHabit: (state, action) => {
      state;
    },
  },
});

export default habitSlice.reducer;
export const { addHabbit, addData } = habitSlice.actions;
