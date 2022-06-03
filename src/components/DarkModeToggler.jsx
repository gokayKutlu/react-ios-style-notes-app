import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {BsMoonFill, BsFillSunFill} from 'react-icons/bs';

import {toggle} from '../stores/darkModeSlice';

const DarkModeToggler = () => {
  const darkMode = useSelector(state => state.darkMode.value);
  const dispatch = useDispatch();
  return (<button id='dark-mode-toggler' onClick={() => dispatch(toggle())}>{
      darkMode
        ? <BsFillSunFill/>
        : <BsMoonFill/>
    }</button>)
}

export default DarkModeToggler
