import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
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

