import { createSlice } from "@reduxjs/toolkit";
import db from "../../carInfo.json";

const initialState = {
  cars: db,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
