import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const initialState = {
  tagsList: [
    { tagName: "coding", id: v4() },
    { tagName: "exercise", id: v4() },
    { tagName: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTags: (state, action) => {
      if (
        state.tagsList.find(({ tagName }) => tagName === action.payload.tagName)
      ) {
        toast.warning("Tag already exists.");
      } else {
        state.tagsList.push(action.payload);
        toast.info("New tag has been added.");
      }
    },
    deleteTags: (state, action) => {
      state.tagsList = state.tagsList.filter(({ id }) => id !== action.payload);
      toast.info("Tag has been deleted.");
    },
  },
});

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;
