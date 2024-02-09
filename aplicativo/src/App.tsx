import './App.css';
import React from 'react';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';


export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  )
}

