import React from 'react';
import './styles.css';


function Footer() {


    return (
        <>
        <div id='footer-container'>
            <div className='footer-content'>
                <div className='pay-container'>
                    <span>Formas de pagamento</span>
                    <div className='pay-content'>
                        <img src='https://wx.mlcdn.com.br/site/desk/footer/payment-types/boleto.svg' alt='icone-boleto'/>
                        <img src='https://wx.mlcdn.com.br/site/desk/footer/payment-types/visa.svg' alt='icone-visa'/>
                        <img src='https://wx.mlcdn.com.br/site/desk/footer/payment-types/mastercard.svg' alt='icone-mastercard'/>
                        <img src='https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png' alt='icone-pix'/>
                    </div>
                </div>
                <button className='talkToUs' >Fale conosco</button>
                <span className='copy'>&copy; Group_Nord | Todos os direitos reservados</span>
            </div>
        </div>
        </>
    )
}


export default Footer;