import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {Steve} from './Steve.tsx'
import {Peoples} from './Peoples.tsx'
import './Steve.css'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Surround your Component in a div with the class name so that all HTML elements will use the class name style sheet values */}
    {/* <div className="app"> */}
    <App />
    {/* </div> */}
    {/* <div className="steve"> */}
    <Steve />
    {/* </div> */}
    <Peoples />
  </StrictMode>,
)
