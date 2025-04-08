import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { ListUsers } from './components/ListUsers'
import {Menu} from './components/Menu'
import {AddUser} from './components/AddUser'
import { EditUser } from './components/EditUser';

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
  const handleUserAdded = (updatedUsers: { id: number; name: string; age: number }[]) => {
    setUsers(updatedUsers); // Update the users state in App
    console.log('Users updated in App:', updatedUsers);
  };

  // Callback function to handle user update
  const handleUpdateUser = (updatedUsers: { id: number; name: string; age: number }[]) => {
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
          <Route path="/users" element={<ListUsers users={users} />} />
          <Route path="/users/add" element={<AddUser users={users} onUserAdded={handleUserAdded} />} />
          <Route path="/users/edit/:userid" element={<EditUser users={users} onUpdateUser={handleUpdateUser} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
