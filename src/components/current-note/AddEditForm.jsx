import React from 'react'
import {useSelector} from 'react-redux'

const AddEditForm = (props) => {
  const editingNoteID = useSelector(state => state.notes.editingNoteID);
  const editingNoteTitle = '';
  const editingNoteBody = '';

  const title = props.mode === 'add'
    ? ''
    : editingNoteTitle;
  const body = props.mode === 'add'
    ? ''
    : editingNoteBody;

  return (<form id='add-edit-form'>
    <input type="text" id='title' placeholder='Title' autoComplete='off' value={title}/>
  </form>)
}

export default AddEditForm
