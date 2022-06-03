import './assets/css/styles.scss';

import {useSelector} from 'react-redux';

import Notes from './components/notes/Notes';
import DarkModeToggler from './components/DarkModeToggler';
import AddEditNote from './components/current-note/AddEditNote';
import ViewNote from './components/current-note/ViewNote';

function App() {
  const darkMode = useSelector(state => state.darkMode.value);
  const addNewNote = useSelector(state => state.notes.addingNewNote);
  const editingNoteID = useSelector(state => state.notes.editingNoteID);
  const viewingNoteID = useSelector(state => state.notes.viewingNoteID);

  return (<div id="wrapper" className={darkMode
      ? 'dark'
      : 'light'}>
    <div className="container">
      <DarkModeToggler/>
      <Notes/>
      <div id="current-note">
        {(addNewNote || editingNoteID !== null) && <AddEditNote/>}
        {viewingNoteID !== null && <ViewNote/>}
      </div>
    </div>
  </div>);
}

export default App;
