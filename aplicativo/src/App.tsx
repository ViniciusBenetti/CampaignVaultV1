import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Cadastro } from './components/Cadastro';


export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
  )
}

