import { configureStore } from "@reduxjs/toolkit";

import MiscellaneousReducer from "./Features/MiscellaneousSlice";

export const store = configureStore({
  reducer: {
    Miscellaneous: MiscellaneousReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
