import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MiscellaneousState {
  lang: string;
}
const initialState: MiscellaneousState = {
  lang: "en",
};

export const MiscellaneousSlice = createSlice({
  name: "Miscellaneous",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export default MiscellaneousSlice.reducer;
export const { setLang } = MiscellaneousSlice.actions;
export const lang = (state: RootState) => state.Miscellaneous.lang;
