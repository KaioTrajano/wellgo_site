import React from 'react'
import '../styles/Navbar.scss';

function Navbar() {
    return (
      
      
      <nav className='navbar'>
        
        <ul>
   
        <div className='left_itens'>
        <img className='logo' src="./logo.png"></img>
        <li>Para seu negócio</li>
        <li>Aplicativo</li>
        <li>Planos</li>
        <li>Perguntas frequentes</li>
        </div>

        <div className='right_itens'>
        <li>Login</li>
        <li>Cadastrar-se agora mesmo</li>
        </div>
        </ul>

  
        
      </nav>
  
  
    
    )
  }
  
  export default Navbar