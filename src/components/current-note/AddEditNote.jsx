import React from 'react'

import {RiSave3Fill} from 'react-icons/ri'
import AddEditForm from './AddEditForm';

const AddEditNote = (props) => {
  return (
    <div className='add-edit-note'>
      <header>
        <h3>
          {props.mode === 'add' && 'Add new note'}
          {props.mode === 'edit' && 'Editing note'}
        </h3>
        <div className="buttons">
          <button id="save-button">
            <RiSave3Fill />
          </button>
        </div>
      </header>
      <AddEditForm mode={props.mode} />
    </div>
  )
}

export default AddEditNote
