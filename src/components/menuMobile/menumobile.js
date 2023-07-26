import React, { useEffect } from 'react';
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { FaPaperPlane } from 'react-icons/fa';
import { BiSolidShareAlt } from 'react-icons/bi';
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'



function MenuMobile ({menuIsVisible, setMenuIsVisible}) {

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';

    },[menuIsVisible])

    return(
        <Container $isVisible={menuIsVisible}>
            <IoClose size={45}  onClick={() => setMenuIsVisible(false)}/>
            <nav>
                <ul>
                    <li>INÍCIO</li>
                    <li>NOSSA LOJA</li>
                    <li>NOSSA HISTÓRIA</li>
                    <li>CONTATO</li>
                </ul>
                <div className='social-media-mobile'>
                    <a className='paper-plane' href='/'><FaPaperPlane /></a>
                    <a href='/'><BiSolidShareAlt /></a>
                    <a href='/'><RiShoppingCart2Fill /></a>
                    <a href='/'><MdEmail /></a>
                    <a className='phone' href='/'><BsFillTelephoneFill /></a>
                </div>
            </nav>

        </Container>

    )
};

export default MenuMobile;
