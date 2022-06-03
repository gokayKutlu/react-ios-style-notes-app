import React from 'react'
import {BsPlusLg} from 'react-icons/bs';
import {useDispatch} from 'react-redux';

import {toggleAddingNewNote, setCurrentNoteTitle, setCurrentNoteBody, setEditingNoteID} from '../../stores/notesSlice';

const handleAddNote = (dispatch) => {
  dispatch(toggleAddingNewNote());
  dispatch(setCurrentNoteTitle(''));
  dispatch(setCurrentNoteBody(''));
  dispatch(setEditingNoteID(null));
}

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <h3>Notes</h3>
      <button id="add-new" onClick={() => handleAddNote(dispatch)}>
        <BsPlusLg/>
      </button>
    </header>
  )
}

export default Header
