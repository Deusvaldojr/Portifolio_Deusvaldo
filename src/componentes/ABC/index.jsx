import './style.css';
import background from '../img/5715.jpg'
import { Link } from 'react-router-dom';

export const ABC = () => {
    return (
        <div className='body' style={{ backgroundImage: `url(${background})`}}>
            <h1>Site em criação constante</h1>
            <nav className='menuabc'>
                <ul>
                    <li><Link style={{textDecoration: 'none',}} to='https://deusvaldojr.wordpress.com/'>Inicial</Link></li>
                    <li><Link style={{textDecoration: 'none',}} to='#'> Pacotes </Link></li>
                    <li><Link style={{textDecoration: 'none',}} to='#'>Cadastro</Link></li>
                    <li><Link style={{textDecoration: 'none',}} to='https://www.detran.mg.gov.br/'>Detran</Link></li>
                    <li><Link style={{textDecoration: 'none',}} to='#'>Serviços</Link></li>
                    <li><Link style={{textDecoration: 'none',}} to='#'>Contato</Link></li>
                </ul>
            </nav>
            <div className='text'> 
                <h2>Desperte a liberdade nas estradas e embarque na jornada da sua<br/> independência ao volante!</h2>
                <p>Chapter OneThe studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn. From the corner of the divan of Persian saddle-bags on which…
                27 de junho de 2023</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam nemo, ut animi sapiente voluptate. Facilis inventore cum autem consequatur? Excepturi quo, aspernatur similique omnis explicabo ex recusandae? Nam, nobis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam nemo, ut animi sapiente voluptate. Facilis inventore cum autem consequatur? Excepturi quo, aspernatur similique omnis explicabo ex recusandae? Nam, nobis.</p>
            </div>
        </div>
    );
};