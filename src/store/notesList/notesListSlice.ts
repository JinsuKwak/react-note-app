import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";
import notes from "../../noteData";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: null | Note;
}

const initialState: NoteState = {
  mainNotes: [...notes],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({ tagName }) => tagName !== payload.tagName),
      }));
    },
  },
});

export const { removeTags } = notesListSlice.actions;
export default notesListSlice.reducer;
