// // pizzaData.js
// import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";

// export const pizzaData = createSlice({
//   name: "pizzaData",
//   initialState: {
//     pizzas: [], // Ensure this is an empty array
//     pizzaId: [" "],
//   },
//   reducers: {
//     idOfPizza: (state, action) => {
//       // state.pizzaId = [...state.pizzaId, action.payload];
//       const pizzaToAdd = action.payload; // Assuming payload is the entire pizza object
//       state.pizzas.push(pizzaToAdd);
//       state.pizzaId.push(pizzaToAdd.key);
//     },

//     // addToCart: (state, action) => {
//     //   // Find the pizza by ID and update its cart status
//     //   const pizzaToUpdate = state.data.find(
//     //     (pizza) => pizza.id === action.payload.id
//     //   );
//     //   if (pizzaToUpdate) {
//     //     pizzaToUpdate.inCart = true;
//     //   }
//     // },
//   },
// });

// export const { idOfPizza } = pizzaData.actions;

// export default pizzaData.reducer;
