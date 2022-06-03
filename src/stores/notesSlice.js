import {createSlice} from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    addingNewNote: false,
    editingNoteID: null,
    currentNoteTitle: '',
    currentNoteBody: '',
    notes: [],
    viewingNoteID: null
  },
  reducers: {
    toggleAddingNewNote: (state) => {
      state.addingNewNote = !state.addingNewNote;
    },
    setAddingNewNote: (state, action) => {
      state.addingNewNote = action.payload;
    },
    setEditingNoteID: (state, action) => {
      state.editingNoteID = action.payload;
      state.viewingNoteID = null
    },
    setCurrentNoteTitle: (state, action) => {
      state.currentNoteTitle = action.payload;
    },
    setCurrentNoteBody: (state, action) => {
      state.currentNoteBody = action.payload;
    },
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
      state.viewingNoteID = action.payload.id;
      state.editingNoteID = null;
      state.addingNewNote = false;
    },
    editNote: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.editingNoteID) {
          note.title = action.payload.title;
          note.body = action.payload.body;
        }
        return note;
      });
      state.viewingNoteID = action.payload.editingNoteID;
      state.editingNoteID = null;
      state.addingNewNote = false;
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => {
        return note.id !== action.payload;
      });
      if (state.viewingNoteID === action.payload) {
        state.viewingNoteID = null;
      }
      state.editingNoteID = null;
      state.addingNewNote = false;
    },
    setViewingNoteID: (state, action) => {
      state.viewingNoteID = action.payload;
      state.editingNoteID = null;
      state.addingNewNote = false;
    }
  }
});

export const {toggleAddingNewNote, setAddingNewNote, setEditingNoteID, setCurrentNoteTitle, setCurrentNoteBody, addNote, editNote, deleteNote, setViewingNoteID} = notesSlice.actions;

export default notesSlice.reducer;
