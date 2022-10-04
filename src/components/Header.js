import React from 'react'
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
        <h1>O melhor aplicativo de agendamento<br></br>
        e gestão para seu <b>negócio</b></h1>
        <div className='inputbox'>
        <input className='Header_input' placeholder='Seu melhor e-mail'></input><label>
            <button>Teste o plano gratuito</button></label>
            <div className='input_description_box'>
            <span className='input_description'>É<b>100% gratuito</b> e nunca enviaremos mais de um email por mes</span>
            </div>
        </div>


  <div className='header_text_cont'>
        <div class="grid-x">
        <div class="cell small-9"></div>
  <div class="cell medium-7">
    <div className='header_text'>
    <h5>Notificações</h5>
    <h2>Avisos e mensagens<br></br>automáticas<br></br>por Whatsapp</h2>
    <ul className='header_text_list'>
      <li>Confirmação de agendamento</li>
      <li>Aviso de retorno</li>
      <li>Alertas</li>
    </ul>
    <h4>SAIBA MAIS</h4>
    </div>
    
  </div>
</div>

</div>

    </div>
  )
}

export default Header