'use client';

import React, { useRef } from 'react';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; // importação do tipo do Swiper

export default function HomePage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="home-background">
      <h1 className="titulo">Bem-vindo à nossa página!</h1>

      <div className="faixa">
        <img src="/fotobuque.jpeg" alt="Foto do buquê de flores" className="faixa-foto" />
        <div className="faixa-texto">
          <span className="faixa-titulo">Você é minha inspiração todos os dias!</span>
          <p>
            Te amo mais do que consigo explicar. Obrigado por estar comigo mesmo quando nem eu sabia como me amar.
            Você me ensina todos os dias o que o amor não dói e sim que é leve, cuidado e reciprocidade.
            Eu me sinto tão sortudo por ter alguém como você na minha vida, alguém que me faz querer ser melhor,
            alguém que me acolhe até nos dias nublados. Só quero te fazer feliz, te dar paz e te mostrar, todos os dias,
            o quanto você é especial pra mim.
          </p>
        </div>
      </div>
    
      <div className="carrossel-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="carrossel"
        >
          <SwiperSlide><img src="/1vezmercado.jpeg" alt="Foto 1" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/fotoescuraporks.jpeg" alt="Foto 2" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/porksclara.jpeg" alt="Foto 3" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/roncando.jpeg" alt="Foto 4" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/fotobeijinhopraça.jpeg" alt="Foto 5" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/caidemoto.jpeg" alt="Foto 6" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/minhasgatinhas.jpeg" alt="Foto 7" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/familia0.5.jpeg" alt="Foto 8" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/familiaselfie.jpeg" alt="Foto 9" className="foto-carrossel" /></SwiperSlide>
          <SwiperSlide><img src="/montagelinda.jpeg" alt="Foto 10" className="foto-carrossel" /></SwiperSlide>
        </Swiper>

        {/* Botões de navegação */}
        <div className="botoes-navegacao">
          <button onClick={() => swiperRef.current?.slidePrev()} className="botao-navegacao">← Anterior</button>
          <button onClick={() => swiperRef.current?.slideNext()} className="botao-navegacao">Próximo →</button>
        </div>
      </div>
      <div className="rodape">
        <p>Você é minha paz, minha pessoa favorita no mundo. Quando te olho, sinto como se tudo 
          estivesse no lugar certo. Cada abraço seu me cura um pouquinho, cada palavra sua me 
          acalma. Obrigado por acreditar em mim, por me apoiar e por ser esse amor tão sincero. 
          Com você, tudo é mais bonito, mais leve, mais possível. E eu só quero continuar 
          construindo nossos dias com carinho e verdade.</p>
      </div>
    </div>

  );
}
