import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Edit from './pages/Userpages/Edit';
import Profile from './pages/Userpages/Profile';
import Signup from './pages/Userpages/Signup';
import Login from './pages/Userpages/Login';

import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/home" element={ <HomePage /> }/>
        <Route path="/edit" element={ <Edit /> }/>
        <Route path="/profile" element={ <Profile /> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <Login /> }/>
      </Routes>
    </div>
  );
}

export default App;
