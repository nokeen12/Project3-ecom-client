import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Edit from './pages/Userpages/Edit';
import Profile from './pages/Userpages/Profile';
import Signup from './pages/Userpages/Signup';
import Login from './pages/Userpages/Login';
import ProductDetails from './pages/Products/Productdetails';
import Navbar from './components/Navbar/Navbar'
import ProductList from './pages/Products/Productlist';
import ProductEdit from './pages/Products/Productedit';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/home" element={ <HomePage /> }/>
        <Route path="/edit" element={ <IsPrivate><Edit /></IsPrivate> }/>
        <Route path="/profile" element={ <IsPrivate><Profile /></IsPrivate> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/products/:id" element={ <ProductDetails /> }/>
        <Route path="/products" element={ <ProductList/> }/>
        <Route path="/products/:id/edit" element={ <IsPrivate><ProductEdit/></IsPrivate> }/>
      </Routes>
    </div>
  );
}

export default App;
