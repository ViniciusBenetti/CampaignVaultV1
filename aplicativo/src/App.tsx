import './App.css';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';


export const App = ():JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

