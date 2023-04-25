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

      const data = state.find((data) => data.id === action.payload.id);
      console.log("data is", data);
      if (data) {
        const updatedHabitData = data.habitData
          ? [...data.habitData, action.payload.habitData]
          : [action.payload.habitData];
        data.habitData = updatedHabitData;
        console.log("new data", data.habitData);
      }
      return state;
      // state.map((data) => {
      //   console.log("data is", data);
      //   if (data.id === action.payload.id) {
      //     const updatedHabitData = [
      //       ...data.habitData,
      //       action.payload.habitData,
      //     ];
      //     console.log("updated habit data", updatedHabitData);
      //     return { ...data, habitData: updatedHabitData };
      //   }
      // });
      // console.log("updated state", state);
      // return state;

      // const index = state.findIndex((habit) => {
      //   habit.id === action.payload.id;
      // });
      // console.log("index", index);
      // state[index].habitData.push(action.payload.habitData);
    },
    removeHabit: (state, action) => {
      state;
    },
  },
});

export default habitSlice.reducer;
export const { addHabbit, addData } = habitSlice.actions;
