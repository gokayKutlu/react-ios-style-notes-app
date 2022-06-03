import {createSlice} from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    title: '',
    body: '',
    addingNewNote: false,
    editingNoteID: null
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setBody: (state, action) => {
      state.body = action.payload
    },
    toggleAddingNewNote: (state) => {
      state.addingNewNote = !state.addingNewNote
    },
    setEditingNoteID: (state, action) => {
      state.editingNoteID = action.payload
    }
  }
});

export const {setTitle, setBody, toggleAddingNewNote} = notesSlice.actions;

export default notesSlice.reducer;
