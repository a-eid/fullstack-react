import React from 'react'
import {render} from 'react-dom'
import App from './components/App' 

render(<App initData={window.data} /> , 
  document.querySelector("#root"))