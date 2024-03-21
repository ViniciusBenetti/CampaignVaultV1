import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Cadastro } from './components/Cadastro';
import { EsqueceuSenha } from './components/EsqueceuSenha';
import { Logou } from './components/Logou';
import { Criadores } from './components/Criadores';
import { Sobre } from './components/Sobre';
import { BlogSemLogar } from './components/BlogSemLogar';



export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
          <Route path='/EsqueceuSenha' element={<EsqueceuSenha/>}/>
          <Route path='/Logou' element={<Logou/>}/>
          <Route path='/Criadores' element={<Criadores/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/BlogSemLogar' element={<BlogSemLogar/>}/>
        </Routes>
      </BrowserRouter>
  )
}

