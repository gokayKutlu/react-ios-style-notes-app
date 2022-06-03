import React from 'react'
import {useDispatch} from 'react-redux';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

import {deleteNote, setEditingNoteID, setViewingNoteID, setAddingNewNote} from '../../stores/notesSlice';

const NoteBox = (props) => {
  const dispatch = useDispatch();

  return (<div className="note-box">
    <div className="note-content" onClick={() => {
        dispatch(setViewingNoteID(props.id));
        dispatch(setAddingNewNote(false));
      }}>
      <div className="title">
        {props.title}
      </div>
      <div className="body">
        {props.body}
      </div>
    </div>
    <div className="buttons">
      <button id='edit-note' onClick={() => {
          dispatch(setEditingNoteID(props.id));
        }}>
        <AiFillEdit/>
      </button>
      <button id='delete-note' onClick={() => {
          dispatch(deleteNote(props.id))
        }}>
        <AiFillDelete/>
      </button>
    </div>
  </div>)
}

export default NoteBox
