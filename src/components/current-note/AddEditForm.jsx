import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react';

import {setCurrentNoteTitle, setCurrentNoteBody} from '../../stores/notesSlice'

const handleTitleChange = (e, dispatch) => {
  dispatch(setCurrentNoteTitle(e.target.value));
}

const handleBodyChange = (e, dispatch) => {
  dispatch(setCurrentNoteBody(e.target.value));
}

const AddEditForm = () => {
  const dispatch = useDispatch();

  const editingNoteID = useSelector(state => state.notes.editingNoteID);
  const isEditing = editingNoteID !== null;
  const currentNote = useSelector(state => state.notes.notes).filter(note => note.id === editingNoteID);

  useEffect(() => {
    if (isEditing) {
      dispatch(setCurrentNoteTitle(currentNote[0].title));
      dispatch(setCurrentNoteBody(currentNote[0].body));
    }
  }, [editingNoteID])

  const currentNoteTitle = useSelector(state => state.notes.currentNoteTitle);
  const currentNoteBody = useSelector(state => state.notes.currentNoteBody);


  return (<form id='add-edit-form'>
    <input type="text" id='title' placeholder='Title' autoComplete='off' spellCheck='false' value={currentNoteTitle} onChange={(e) => handleTitleChange(e, dispatch)}/>
    <textarea id="body" spellCheck='false' placeholder='Take some notes...' value={currentNoteBody} onChange={(e) => handleBodyChange(e, dispatch)}>
    </textarea>
  </form>)
}

export default AddEditForm
