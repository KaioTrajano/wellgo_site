import React from 'react'
import '../styles/Main.scss';

function Main() {
  return (
    <div>
       <section className='title_section'>
        <div className='title_cont'>

        
         <h5>Chega de dor de cabeça</h5>
         <h2>Está tendo problema com
a gestão de seus clientes?</h2>
  <span>Momentos em que a fila de espera em seu salão e em outros horários ele fica as moscas? Não faz ideia dos seus custos e ganhos e de quanto precisa faturar para 
ter um bom ganho no final do mês?
</span>
</div>
       </section>

       <section className='online_scheduling'>
         
       <div class="grid-x" style={{alignItems: "center"}}>
          
          
       
        <div class="cell medium-8">
            <div className='teste'>
            <h3>Agendamento online</h3>
            <span className='online_scheduling_span'>Agendamentos e fila de espera, 
                controle com facilidade atendimentos 
                com hora marcada, repetição de serviços 
                por período, fila de espera e bloqueio de 
                horários. </span><br></br>
                <h5 className='more'>SAIBA MAIS</h5>
                </div>
        </div>
        <div class="cell medium-7"><img className='online_scheduling_img' src='./online_scheduling_img.png'></img></div>
        
        </div>

       </section>


       <section className='online_payment_section'>

        
         
         <div class="grid-x" style={{alignItems: "center"}}>
            
         <div class="cell medium-8">
         <div className='online_payment_img_cont'>
            <img className='online_payment_img' src='./online_payment_img.png'></img>
            </div>
            </div>
          
          
            
         
          <div class="cell medium-7">
              <div className='online_payment_cont'>
              <h3>Pagamento ou reserva no cartão online</h3>
              <span className='online_scheduling_span'>Agendamentos e fila de espera, 
                  controle com facilidade atendimentos 
                  com hora marcada, repetição de serviços 
                  por período, fila de espera e bloqueio de 
                  horários. </span><br></br>
                  <button className='register_now'>Cadastre-se agora mesmo</button>
                  </div>
          </div>
          </div>
        
          
         </section>
  


         <section className='online_scheduling'>
         
         <div class="grid-x" style={{alignItems: "center", justifyContent:"center"}}>
            
            
         
          <div class="cell medium-8">
              <div className='teste'>
              <h3>Seu próprio aplicativo</h3>
              <span className='online_scheduling_span'>Disponibilize a seus clientes 
              seu próprio aplicativo, com seu logotipo<br></br> e cores, nas versões Android e 
              IOS.</span><br></br>
                  <h5 className='more'>EU QUERO</h5>
                  </div>
          </div>
          <div class="cell medium-7"><img className='online_scheduling_img' src='./your_app.png'></img></div>
          
          </div>
  
         </section>



         <section className='online_payment_section'>

        
         
        <div class="grid-x" style={{alignItems: "center"}}>
        
        <div class="cell medium-8">
        <div className='online_payment_img_cont'>
        <img className='online_payment_img' src='./online_payment_img.png'></img>
        </div>
        </div>
        
        
        

        <div class="cell medium-7">
            <div className='online_payment_cont'>
            <h3>Pagamento ou reserva no cartão online</h3>
            <span className='online_scheduling_span'>Agendamentos e fila de espera, 
                controle com facilidade atendimentos 
                com hora marcada, repetição de serviços 
                por período, fila de espera e bloqueio de 
                horários. </span><br></br>
                <button className='register_now'>Teste o plano gratuito</button>
                </div>
        </div>
        </div>

        
        </section>

        <section className='banner'>
        <img src='./blue_banner.png'></img>
        </section>
        
       
        <section className='online_payment_section'>

        
         
        <div class="grid-x" style={{alignItems: "center"}}>

        <div class="cell medium-8">
        <div className='online_payment_img_cont'>
        <img className='online_payment_img' src='./online_payment_img.png'></img>
        </div>
        </div>




        <div class="cell medium-7">
            <div className='online_payment_cont'>
            <h3>Comissionamento automático de funcionários</h3>
            <span className='online_scheduling_span'>Elabore suas regras de 
            comissionamentos por serviços, produtos, colaboradores ou assistentes. 
            Defina os valores e formas de recebimento de acordo com seu modelo de trabalho.
            </span><br></br>
                <h5 className='more'>SAIBA MAIS</h5>
                </div>
        </div>
        </div>


        </section>


        <section className='online_scheduling'>
         
         <div class="grid-x" style={{alignItems: "center", justifyContent:"center"}}>
            
            
         
          <div class="cell medium-8">
              <div className='teste'>
              <h3>Gestão de estoque</h3>
              <span className='online_scheduling_span'>Cadastre produtos e de baixa 
              automática de estoque com base na venda ou uso de produtos. É possível 
              configurar a quantidade de produtos utilizados em cada serviço e o sistema 
              realizará a baixa no estoque automaticamente..</span><br></br>
              <button className='register_now'>Cadastre-se agora mesmo</button>
                  </div>
          </div>
          <div class="cell medium-7"><img className='online_scheduling_img' src='./your_app.png'></img></div>
          
          </div>
  
         </section>
        
    

    



    </div>
  )
}

export default Main