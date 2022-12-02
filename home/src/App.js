import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './index.css';
import { motion } from 'framer-motion';

import imagem1 from '../src/imagens/1.jpg';
import imagem2 from '../src/imagens/2.jpg';
import imagem3 from '../src/imagens/3.jpg';
import imagem4 from '../src/imagens/4.jpg';
import imagem5 from '../src/imagens/5.jpeg';
import imagem6 from '../src/imagens/6.jpg';
import imagem7 from '../src/imagens/7.jpg';
import imagem8 from '../src/imagens/8.jpg'
import icon_chevron from '../src/imagens/right_chevron_icon.png';

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8];
const icon = [icon_chevron];

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (

    <main className='Home'>
      <div>
        <h1>DREAMS IMOBILIÁRIA</h1>
        <h2 className='slogan'>REALIZANDO SONHOS DESDE 2005</h2>
        <motion.div ref={carousel} className='carousel' whileTop={{cursor: "grabbing"}}>
          <motion.div
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width}}>
            {imagens.map(imagem => (
              <motion.div className='item' key={imagem}>
                <img src={imagem} alt="Imóvel"/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className='buttons'>
              <button onClick={handleLeftClick}><img src={icon} alt="Scroll Left"/></button>
              <button onClick={handleRightClick}><img src={icon} alt="Scroll Rigth"/></button>
        </div>
      </div>
      <hr/>

      <div className='quem-somos'>
        <h2>QUEM SOMOS</h2>
        <h4>HISTÓRIA</h4>
        <p>A Dreams Imobiliária é a maior construtora da América Latina e investe permanentemente no aprimoramento e na gestão da qualidade de seus produtos. Ao longo de sua existência, a empresa sempre esteve sintonizada com o mercado e suas melhores práticas, além de priorizar sempre as necessidades de seus clientes. Assim, a Dreams Imobiliária conquistou duas importantes certificações em 2014: a ISO 14.001, que estabelece padrões rigorosos na gestão de meio ambiente e a OHSAS 18.001, que estabelece padrões rígidos na gestão de segurança e saúde das empresas.</p>
        <p>Desde 2005 no mercado imobiliário, a Dreams Imobiliária é a maior construtora do país no segmento de imóveis para a classe média e média baixa, além de ser a única que oferece casas e apartamentos em mais de 160 cidades do Brasil.</p>
        <h4>CIDADES ATENDIDAS</h4>
        <p>A Dreams Imobiliária é a única construtora presente em 160 cidades brasileiras. Hoje, é líder no mercado de construção civil no segmento de imóveis residenciais e já possui mais de 4 mil casas e apartamentos lançados em 22 estados brasileiros e no Distrito Federal. Além de construir empreendimentos direcionados à classe média, que possibilita a realização do sonho da casa própria a milhares de brasileiros, a empresa gera seis mil postos de trabalho por ano nos locais em que atua.</p>
      </div>
    </main>
  );
}

export default App;
