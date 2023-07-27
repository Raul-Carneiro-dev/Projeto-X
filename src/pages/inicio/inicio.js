import React, { useEffect, useRef, useState } from "react";
import './styles.css';
import Header from "../../components/header/header";
import { Swiper, SwiperSlide} from 'swiper/react';
import Footer from "../../components/footer/footer";
import MenuMobile from "../../components/menuMobile/menumobile";


function Inicio () {

    const [menuIsVisible, setMenuIsVisible] = useState(false)


    const imagens = [
        { id: '1', title: 'GROUP_NORD', subTitle: 'Distribuidora de bebidas', lowTitle: 'Desde 2023', image: 'https://images2.alphacoders.com/473/473240.jpg'},
        { id: '2', title: 'GROUP_NORD', subTitle: 'Distribuidora de perfumes', lowTitle: 'Desde 2023', image: 'https://images3.alphacoders.com/641/641460.jpg'}
    ]

    const sales = [
        {id: '1', description: 'Cachaça Aviador Prata 500ml', price: 'R$ 51,12', promotion: '20% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/cachaca-aviador-prata-500ml/produtosaviador/15983946398/13cf5376190f5661d5abc6bdc54aa797.jpeg'},
        {id: '2', description: 'Vinho Argentino Viejo Viñedo Red Wine - RPB S.A.', price: 'R$ 14,03', promotion: '30% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/vinho-argentino-viejo-vinedo-red-wine-rpb-s-a/divvino/4566993/096c0b3c04ced9def0c557f9c6cb79d5.jpeg'},
        {id: '3', description: 'Kit Protetor Solar Corporal Helioderm Suncare FPS 30 120ml', price: 'R$ 45,09', promotion: '10% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/kit-protetor-solar-corporal-helioderm-suncare-fps-30-120ml-facial-antioleosidade-fps-50-50g/drogariaaraujosa/849219/7e33626dc75abc91d8a3b6d666260cde.jpeg'},
        {id: '4', description: 'Malbec Black 50ml - O Boticário - O Boticário', price: 'R$ 129,90', promotion: '5% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/malbec-black-50ml-o-boticario-o-boticario/mbmusafitnessecosmeticos/3fe0412866e911ed98034201ac185019/e63cbd79a0e54612dc0903c2ac7ce0d7.jpeg'},
        {id: '5', description: 'Deo Parfum Natura Homem Tato 100ml', price: 'R$ 125,00', promotion: '10% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/perfume-masculino-deo-parfum-100ml-natura-homem-tato-perfumaria/ednamodasecosmeticos/c51bb0a25e0111ed80924201ac185019/a1073a457e90f7a8b8d44e6925aa53e7.jpeg'},
        {id: '6', description: 'Perfume Lattitude Origini Deo Colônia 100ml - Hinod', price: 'R$ 109,90', promotion: '25% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/perfume-lattitude-origini-deo-colonia-100ml-hinod/feelinperfumaria/6f9362223bf311ed97654201ac185019/8ebffeda200fe45841cb82ea553d2beb.jpeg'},
        {id: '7', description: 'Fone Bluetooth E6s TWS Sem Fio Para Celular Notebook', price: 'R$ 35,10', promotion: '10% de desconto', saleImg: 'https://a-static.mlcdn.com.br/800x560/fone-bluetooth-e6s-tws-sem-fio-para-celular-notebook/amillymulti/a6s/8f2cb9283d11e7795a588920552b711d.jpeg'},
        {id: '8', description: 'Smartphone Poco X5 Pro 5G 8 RAM 256GB PRETO - XAIOMI', price: 'R$ 1,00', promotion: 'É pegar ou largar meu chapa', saleImg: 'https://a-static.mlcdn.com.br/800x560/smartphone-poco-x5-pro-5g-8gb-256gb-preto-xiaomi/simcomercio2/pcx55gpt256/9693025923c141e08e79ddb7ee47d392.jpeg'}
    ]


    const [data, setData] = useState([]);
    const carousel= useRef(null);


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Raul-Carneiro-dev/FakeApi-teste/produtos') 
        .then((response) => response.json())
        .then(setData)

    },[]);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    };


    if(!data || !data.length) return null;


    

    return (
        <>
        <MenuMobile 
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Header setMenuIsVisible={setMenuIsVisible}/>
        <div className="swiper-container">
        <Swiper effect="fade" slidesperview={1} pagination={{clickable: true}} >
            {imagens.map( (item) => (
                <SwiperSlide key={item.id}>
                    <div id="carousel-container">
                        <img src={item.image} alt="slider" className="slide-item"/>
                        <div className="carousel-content">
                            <span className="carousel-titulo">{item.title}</span>
                            <span className="carousel-subtitulo">{item.subTitle}</span>
                            <span className="carousel-lowtitulo">{item.lowTitle}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>

        <div id="shop-container">
            <span className="shop-title">Tem na Group_Nord</span>
            <div className="shop-content">
                <div className="sale-container">
                    {sales.map((itens) => (
                        <div className="saleBox" key={itens.id}>
                            <img className='sale-img' src={itens.saleImg} alt="sale"/>
                            <span className="sale-tittle">{itens.description}</span>
                            <span className="sale-price">{itens.price}</span>
                            <span className="sale-buy">à vista<div className="sale-buy-color">{` (${itens.promotion})`}</div></span>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        <div id="sale-carousel-container-box">
            <span className="shop-title">Você também encontra aqui</span>

        <div id="sale-carousel-container" ref={carousel}>
            {data.map((item) => {
                const {id, description, price, promotion, image} = item;

                return (
                        <div className="saleBox-carousel-content" key={id}>
                            <img className='sale-img' src={image} alt={description}/>
                            <span className="sale-tittle">{description}</span>
                            <span className="sale-price">{price}</span>
                            <span className="sale-buy">à vista<div className="sale-buy-color">{promotion}</div></span>
                        </div>
                );                  
            })}
        </div>
        <div className="carousel-buttons">
            <button onClick={handleLeftClick}>
                <img src="static/images/216151_right_chevron_icon.png" alt="Scroll-Left"></img>
            </button>
            <button onClick={handleRightClick}>
                <img src="static/images/216151_right_chevron_icon.png" alt="Scroll-Right"></img>
            </button>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Inicio;