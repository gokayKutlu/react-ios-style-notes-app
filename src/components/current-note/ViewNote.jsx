import React from 'react'
import {useSelector} from 'react-redux';

const ViewNote = () => {
  const viewingNoteID = useSelector(state => state.notes.viewingNoteID);
  const note = useSelector(state => state.notes.notes).filter(note => note.id === viewingNoteID);
  return (
    <div className='view-note'>
      <h1>{note[0].title}</h1>
      <p className='note-body'>{note[0].body}</p>
    </div>
  )
}

export default ViewNote
