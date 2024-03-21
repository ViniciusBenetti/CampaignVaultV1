import '../styles/index.css'
import { Link } from 'react-router-dom'
import blog from './images/blog.png';
import pigup from './images/pigup.gif'
import offeye from './images/offeye.svg'
import eye  from './images/eye.svg'
import face from './images/face.svg'
import google from './images/google.svg'
import { MouseEventHandler, useState } from 'react';


export const Cadastro = ():JSX.Element => {

    const [olho, setOlho] = useState(false);

    const handleClickEyes:MouseEventHandler = () => {
        console.log("confirm")
        
 
        const senhaInput = document.querySelector('password') as HTMLInputElement;
        const olhoFechado = document.querySelector('#olhofechado') as HTMLImageElement
        const olhoAberto = document.querySelector("#olhoaberto") as HTMLImageElement

        setOlho(!olho); 
        if(olho){
            olhoFechado.style.display = 'none'
            olhoAberto.style.display = 'block'
            senhaInput.type = 'text';


        }else if(!olho){
            olhoFechado.style.display = 'block'
            olhoAberto.style.display = 'none'
            senhaInput.type = 'password';

        }else{
            console.log("erro");
        }
 
      
    };

    return(
        <div className='cadastro-div'>
            <header className='header'>
                <div className='div-header-div'>
                    <div className='Group-7'>
                        <span><Link to='/Contato'>Contato</Link></span>
                        <span><Link to='/Sobre'>Sobre</Link></span>
                        <span><Link to='/Criadores'>Criadores</Link></span>
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
                        Vamos Começar
                    </h1>
                </header>
                <input type="text" />
                <input type="email" />
                <input type='password'/>
                <input type='tel' />

                <div className="esqueceu-senha">
                    <span><Link to='/EsqueceuSenha'>esqueceu a senha?</Link></span>

                </div>
                <button><Link to='/Entrou'>Entrar</Link></button>
                <div className="ou-entre-com">
                    <span><hr></hr>ou entre com<hr></hr></span>

                    <div className="social-media">
                        
                    <img src={face} alt="facebooklogo"  id='facelogo'/>
                    <img src={google} alt="googlelogo"  id='googlelogo'/>
                    </div>
                </div>
            </div>

        </div>

        <div className='Blog'>
            <Link to='/BlogSemLogar'><img alt="blog" id='blog' src={blog}/></Link>
        </div>
        <span className='nome'>Nome</span>
        <span className="email">Email</span>
        <span className="password">Password</span>
        <span className='telefone'>Celular</span>
        <img src={offeye} alt="olhofechado" id='olhofechado'/>
        <img src={eye} alt="olhoaberto" id='olhoaberto' onClick={handleClickEyes}/>

            
                
        </div>
    )

}