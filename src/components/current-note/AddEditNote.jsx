import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {RiSave3Fill} from 'react-icons/ri'
import AddEditForm from './AddEditForm';
import {addNote, editNote, setAddingNewNote, setCurrentNoteTitle, setCurrentNoteBody, setEditingNoteID} from '../../stores/notesSlice';

const saveNote = (title, body, isAddingNote, editingNoteID, nextNoteID, dispatch) => {
  if (!title || !body) {
    toast.warn('Please fill all the fields.');
    return;
  }

  if (isAddingNote) {
    // add new note
    dispatch(addNote({id: nextNoteID, title, body}));
  } else {
    // edit existing note
    dispatch(editNote({
      editingNoteID,
      title,
      body
    }));
  }

  dispatch(setCurrentNoteTitle(''));
  dispatch(setCurrentNoteBody(''));

}

const AddEditNote = () => {
  const dispatch = useDispatch();

  const isAddingNote = useSelector(state => state.notes.addingNewNote);
  const title = useSelector(state => state.notes.currentNoteTitle);
  const body = useSelector(state => state.notes.currentNoteBody);
  const editingNoteID = useSelector(state => state.notes.editingNoteID);
  const nextNoteID = useSelector(state => state.notes.notes).length;

  const isDarkMode = useSelector(state => state.darkMode.value);

  return (<div className='add-edit-note'>
    <header>
      <h3>
        {
          isAddingNote
            ? 'Add new note'
            : 'Editing note'
        }
      </h3>
      <div className="buttons">
        <button id="save-button" onClick={() => saveNote(title, body, isAddingNote, editingNoteID, nextNoteID, dispatch)}>
          <RiSave3Fill/>
        </button>
      </div>
    </header>
    <AddEditForm/>
    <ToastContainer theme={isDarkMode ? 'dark' : 'light'}/>
  </div>)
}

export default AddEditNote
