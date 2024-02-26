import '../styles/index.css'
import { Link } from 'react-router-dom'
import blog from './images/blog.png';
import pigup from './images/pigup.gif'

export const Home = ():JSX.Element => {
    return (
        <body>   
        <div className='home-div'>
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
            <img  alt="pigup" id='Group-8' src={pigup}/>
            <div className='Group-6'>
                <h1>CampaignVault</h1>
                <span>Uma ferramenta que promete te deixar rico.</span>
            </div>
            <div className='cards'>
                <div>
                    <legend>Campanhas Efetivas</legend>
                    <span>Descubra como transformar o retorno dos seus impulsionamentos em publicidade.</span>
                </div>
                <div>
                    <legend>Dados e Analises Estrat.</legend>
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
        </body>
    ) 
}