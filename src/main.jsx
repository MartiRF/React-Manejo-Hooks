import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, } from 'react-router-dom'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayouEffect/Layout'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWihtCustomHook } from './01-useState/CounterWihtCustomHook'
// import { FormWihtCustomHook } from './02-useEffect/FormWihtCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-explamples/MultipleCustomHooks'
// import { HooksApp } from './HooksApp'
// import { TODOApp } from './08-useReducer/TODOApp'

import './index.css'
import './08-useReducer/intro-reduce'
import { MainApp } from './09-useContext/MainApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <MainApp />
  {/* </React.StrictMode> */}
  </BrowserRouter>
)
