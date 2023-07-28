import React from 'react';
import estetico from '../../images/estetico.png'
import corporal from '../../images/corporal.png'
import logo from '../../images/logoTransp.png'
import { useNavigate } from 'react-router-dom';

const Esteticos = () => {
    const navigate = useNavigate()
    const esteticosPage = () => {
        navigate("/esteticos")
    }
    const corporalesPage = () => {
        navigate("/corporales")
    }
    return (
        <div className='container'>
            <h1 className='text-[32px] font-bold'>
                Servicios
            </h1>
            <div className='grid grid-cols-1 grid-rows-2 py-10 gap-5'>
                <div className='boxPortfolio'>
                    <div className='cursor-pointer ejemplo' onClick={() => esteticosPage()}>
                        <img src={estetico} className='w-full imgPortfolio' />
                        <div className='cap'>
                            <p className='infoHover2'>
                                <b>
                                    Estéticos
                                </b>
                            </p>
                            <p className='infoHover'>

                                Consulta nuestros servicios de estética
                            </p>
                        </div>
                    </div>
                </div>

                <div className='boxPortfolio'>
                    <div className='cursor-pointer ejemplo' onClick={() => corporalesPage()}>
                        <img src={corporal} className='w-full imgPortfolio' />
                        <div className='cap'>
                            <p className='infoHover2'>
                                <b>
                                    Corporal
                                </b>
                            </p>
                            <p className='infoHover'>

                                Consulta nuestros servicios corporales
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Esteticos;