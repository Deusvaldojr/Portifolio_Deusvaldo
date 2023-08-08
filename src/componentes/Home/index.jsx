import { useState, useEffect, useRef } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import background from '../img/grunge.jpg'

import image1 from '../img/img1.png';
import image2 from '../img/img2.png';
import image3 from '../img/img3.png';
import image4 from '../img/img4.png';
import image5 from '../img/image1.jpg';
import image6 from '../img/image2.jpg';
import image7 from '../img/image3.jpg';
import image8 from '../img/image4.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8]



export const Home = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
    return (
        <div className='projeto1' style={{ backgroundImage: `url(${background})`}}> 
            <h1>App em react js</h1>
            <h3>Projeto realizado com outros 5 participantes</h3>
            <h2>Belo Horizonte 2023</h2>
            <p>
                Projeto realizado em grupo, para elaboração de um aplicativo de cadastro de pacientes em uma clinica de Acupuntura.
            A cliente tinha uma reclamaçao em relação ao preenchimento manual das fichas de cadastro, e propomos a ela e elaboração de um App para gerenciar o cadastro de clientes.
            </p>
            <p>
                Fiquei responsável pelo planejamento, cronograma e acompanhamento das atividades do projeto. Cada membro do grupo trabalhou em colaboração, trocando informações e apoiando-se mutuamente para garantir o sucesso do projeto. Haverá comunicação regular por meio de reuniões via teams e presenciais e ferramentas colaborativas tais como figma e trello.
            </p>
            <div className='car'>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing'}}> 
                  <motion.div className='inner' drag='x' dragConstraints={{ right: 0, left: -width}} initial={{ x: 100}} animate={{ x:0}}
                  transition={{ duration: 1}}>
                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt='img'/>
                        </motion.div>
                    ))}  
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};