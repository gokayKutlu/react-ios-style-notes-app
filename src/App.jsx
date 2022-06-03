import './assets/css/styles.scss';

import {useSelector} from 'react-redux';

import Notes from './components/notes/Notes';
import DarkModeToggler from './components/DarkModeToggler';
import AddEditNote from './components/current-note/AddEditNote';

function App() {
  const darkMode = useSelector(state => state.darkMode.value);
  const addNewNote = useSelector(state => state.notes.addingNewNote);

  return (<div id="wrapper" className={darkMode ? 'dark' : 'light'}>
    <div className="container">
      <DarkModeToggler/>
      <Notes/>
      <div id="current-note">
        {addNewNote && <AddEditNote mode='add' />}
      </div>
    </div>
  </div>);
}

export default App;
