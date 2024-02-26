import '../styles/index.css'
import { Link } from 'react-router-dom'
import blog from './images/blog.png';
import pigup from './images/pigup.gif'

export const Login = ():JSX.Element => {

    return(
        <div className='login-div'>
            <header className='header'>
                <div className='div-header-div'>
                    <div className='Group-7'>
                        <span>Contato</span>
                        <span>Sobre</span>
                        <span>Criadores</span>
                    </div>
                    <div className='div-header-header'>
                        <Link to='/Login' id='entrar'>Entrar</Link>
                        <Link to='/Cadastro' id='cadastro'>Cadastro</Link>
                    </div>
                </div>
            </header>
        
        <div className="Group-10">

            <div className="Group-9">
            <img  alt="pigup" id='pig' src={pigup}/>

            <div className='Group-6'>
                <h1>CampaignVault</h1>
                <span>Uma ferramenta que promete te deixar rico.</span>
            </div>

            </div>
            <div className="Group-4">
                <header>
                    <h1>
                        Bem Vindo
                    </h1>
                </header>
                <input type="text" />
                <input type="text" />

                <div className="esqueceu-senha">
                    <span>esqueceu a senha?</span>

                </div>
                <button>Entrar</button>
                <div className="ou-entre-com">
                    <span><hr></hr>ou entre com<hr></hr></span>

                    <div className="social-media">
                        fb logo 
                        google logo

                    </div>
                </div>
            </div>

        </div>

        <div className='Blog'>
            <img alt="blog" id='blog' src={blog}/>
        </div>
            
                
        </div>
    )

}