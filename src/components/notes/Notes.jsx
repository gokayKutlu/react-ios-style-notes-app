import React from 'react'
import {useSelector} from 'react-redux';

import Header from './Header';
import NoteBox from './NoteBox';

const truncate = (input, length) => input.length > length ? `${input.substring(0, length)}...` : input;

const Notes = () => {
  const notes = useSelector(state => state.notes.notes);

  return (<div id="notes">
    <Header/> {
      notes && notes.map((note) => {
        const title = truncate(note.title, 15);
        const body = truncate(note.body, 25);

        return <NoteBox id={note.id} key={note.id} title={title} body={body}/>
      })
    }
  </div>)
}

export default Notes
