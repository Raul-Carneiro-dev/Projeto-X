import React from 'react';
import './styles.css';
import { FaPaperPlane } from 'react-icons/fa';
import { BiSolidShareAlt } from 'react-icons/bi';
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'



function Header ({setMenuIsVisible}) {


    return (
        <>
        <header id='header-container'>
            <span>GROUP_NORD</span>

            <nav>
                <ul>
                    <li>INÍCIO</li>
                    <li>NOSSA LOJA</li>
                    <li>NOSSA HISTÓRIA</li>
                    <li>CONTATO</li>
                </ul>
                
            <div id='social-media-content'>
                <a className='paper-plane' href='/'><FaPaperPlane /></a>
                <a href='/'><BiSolidShareAlt /></a>
                <a href='/'><RiShoppingCart2Fill /></a>
                <a href='/'><MdEmail /></a>
                <a className='phone' href='/'><BsFillTelephoneFill /></a>
            </div>
            </nav>


            <AiOutlineMenu className='menumobile'  onClick={() => setMenuIsVisible(true)}/>
        </header>
        
        </>
    )
}

export default Header;