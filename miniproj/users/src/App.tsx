import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ListUsers } from './components/ListUsers'
import {Menu} from './components/Menu'
import {AddUser} from './components/AddUser'

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 30
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 28
    }
  ])

  // Callback function to handle user addition
  const handleUserAdded = (updatedUsers: { id: number; name: string; email: string }[]) => {
    setUsers(updatedUsers); // Update the users state in App
    console.log('Users updated in App:', updatedUsers);
  };


  return (
    <>
      <div className='header'>
        <h1>The User Database</h1>
      </div>
      <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/users" element={<ListUsers users={users} />} />
        <Route path="/users/add" element={<AddUser users={users} onUserAdded={handleUserAdded} />} />
        {/* <Route path="/users/edit/:userid" element={<EditUser />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
