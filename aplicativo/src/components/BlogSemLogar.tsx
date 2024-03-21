import { Link } from "react-router-dom";



export const BlogSemLogar = ():JSX.Element => {
    return(
        <div className="blog-sem-logar-div">
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
            
        </div>
    )
}