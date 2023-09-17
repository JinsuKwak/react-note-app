import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tagsList: [
    { tagName: "Coding", id: v4() },
    { tagName: "Exercise", id: v4() },
    { tagName: "Quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
