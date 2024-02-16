import '../styles/index.css'
import { Link } from 'react-router-dom'
import blog from './blog.png';
import pigup from './pigup.gif'

export const Home = ():JSX.Element => {
    return(
        <div className='home-div'>
            <header className='header'>
                <div className='div-header-div'>
                    <div className='Group-7'>
                        <span>Contato</span>
                        <span>Sobre</span>
                        <span>Criadores</span>
                    </div>
                    <div className='div-header-header'>
                        <Link to='/Login' id='entrar'>ENTRAR</Link>
                        <Link to='/Cadastro' id='cadastro'>CADASTRO</Link>
                    </div>
                </div>
            </header>
            <img  alt="pigup" id='Group-8' src={pigup}/>
            <div className='Group-6'>
                <h1>CampaignVault</h1>
                <span>Uma ferramente que promete te deixar rico.</span>
            </div>
            <div className='cards'>
                <div>
                    <legend>Campanhas Efetivas</legend>
                    <span>Descubra como transformar o retorno dos seus impulsionamentos em publicidade.</span>
                </div>
                <div>
                    <legend>Dados Estratégicos</legend>
                    <span>Explore a importância da análise de dados para refinamentos contínuos das campanhas.</span>
                    </div>
                <div>
                    <legend>Melhorias e ajustes</legend>
                    <span>Saiba como ajustar suas estratégias para alcançar os melhores resultados em suas campanhas.</span>
                </div>
            </div>
            <div className='Blog'>
                    <img alt="blog" id='blog' src={blog}/>
                </div>

        </div>
    ) 
}