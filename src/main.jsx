import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayouEffect/Layout'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWihtCustomHook } from './01-useState/CounterWihtCustomHook'
// import { FormWihtCustomHook } from './02-useEffect/FormWihtCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-explamples/MultipleCustomHooks'
// import { HooksApp } from './HooksApp'

import './index.css'
import './08-useReducer/intro-reduce'
import { TODOApp } from './08-useReducer/TODOApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TODOApp />
  //</React.StrictMode>
)
