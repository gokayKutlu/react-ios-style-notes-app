import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from './stores/darkModeSlice';
import notesReducer from './stores/notesSlicer';

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    notes: notesReducer
  },
});
