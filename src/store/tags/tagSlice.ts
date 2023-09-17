import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tagsList: [
    { tagName: "learning", id: v4() },
    { tagName: "work", id: v4() },
    { tagName: "learniquotesng", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
