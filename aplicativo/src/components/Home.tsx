import '../index.css'
import { Link } from 'react-router-dom'

export const Home = ():JSX.Element => {
    return(
        <div className='home-div'>
            <header id='header'>
                <div id='div-header-div'>
                    <div id='Group-7'>
                        CONTATO SOBRE CRIADORES
                    </div>
                    <div id='div-header-header'>
                        <Link to='/Login'>LOGAR</Link>
                        <Link to ='/'>MENU</Link>

                    </div>
                </div>
            </header>

        </div>
    ) 
}