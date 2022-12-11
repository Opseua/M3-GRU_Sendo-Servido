// eslint-disable-next-line
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import '../css/style_home.css';
import { motion } from 'framer-motion';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

import carrossel_1 from '../imagens/carrossel_1.jpg';
import carrossel_2 from '../imagens/carrossel_2.jpg';
import carrossel_3 from '../imagens/carrossel_3.jpg';
import carrossel_4 from '../imagens/carrossel_4.jpg';
import carrossel_5 from '../imagens/carrossel_5.jpg';
import carrossel_6 from '../imagens/carrossel_6.jpg';
import carrossel_7 from '../imagens/carrossel_7.jpg';
import carrossel_8 from '../imagens/carrossel_8.jpg';
import icon_chevron from '../imagens/right_chevron_icon.png'


const imagens = [carrossel_1, carrossel_2, carrossel_3, carrossel_4, carrossel_5, carrossel_6, carrossel_7, carrossel_8];
const icon = [icon_chevron];

function AppHome() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (

    <main className='Home'>
      <div>

        <>
          <NavBar />
        </>

        <h2 className='slogan'>REALIZANDO SONHOS DESDE 2005</h2>
        <motion.div ref={carousel} className='carousel' whileTop={{ cursor: "grabbing" }}>
          <motion.div
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}>
            {imagens.map(imagem => (
              <motion.div className='item' key={imagem}>
                <img src={imagem} alt="Imóvel" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className='buttons'>
          <button onClick={handleLeftClick}><img src={icon} alt="Scroll Left" /></button>
          <button onClick={handleRightClick}><img src={icon} alt="Scroll Rigth" /></button>
        </div>
      </div>


      <div className='quem-somos'>
        <h2>QUEM SOMOS</h2>
        <h4>HISTÓRIA</h4>
        <p>A Dreams Imobiliária é a maior construtora da América Latina e investe permanentemente no aprimoramento e na gestão da qualidade de seus produtos. Ao longo de sua existência, a empresa sempre esteve sintonizada com o mercado e suas melhores práticas, além de priorizar sempre as necessidades de seus clientes. Assim, a Dreams Imobiliária conquistou duas importantes certificações em 2014: a ISO 14.001, que estabelece padrões rigorosos na gestão de meio ambiente e a OHSAS 18.001, que estabelece padrões rígidos na gestão de segurança e saúde das empresas.</p>
        <p>Desde 2005 no mercado imobiliário, a Dreams Imobiliária é a maior construtora do país no segmento de imóveis para a classe média e média baixa, além de ser a única que oferece casas e apartamentos em mais de 160 cidades do Brasil.</p>
        <h4>CIDADES ATENDIDAS</h4>
        <p>A Dreams Imobiliária é a única construtora presente em 160 cidades brasileiras. Hoje, é líder no mercado de construção civil no segmento de imóveis residenciais e já possui mais de 4 mil casas e apartamentos lançados em 22 estados brasileiros e no Distrito Federal. Além de construir empreendimentos direcionados à classe média, que possibilita a realização do sonho da casa própria a milhares de brasileiros, a empresa gera seis mil postos de trabalho por ano nos locais em que atua.</p>
      </div>

      <>
        <Footer />
      </>

    </main>



  );
}

export default AppHome;
