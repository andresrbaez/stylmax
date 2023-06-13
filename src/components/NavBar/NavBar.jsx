import React from 'react';
import logo from '../../images/logo2.png'
// import logo from '../../images/logoStylMax.png'

const NavBar = () => {
    return (
        <div className='border-b-[var(--color-extralightblack)] border-b w-full p-4 shadow_navbar container flex flex-row justify-between px-11'>
                <img className='max-h-[100px] cursor-pointer' src={logo} alt="" />
                <div className='flex flex-row gap-12 justify-center items-center text-[20px]'>
                    <a href="">Inicio</a>
                    <a href="">Nosotros</a>
                    <a href="">Servicios</a>
                    <a href="">Contáctenos</a>
                </div>

        </div>
        // <div className='border-b-[var(--color-extralightblack)] border-b w-full p-4 shadow_navbar'>
        //     <div className='container flex flex-row justify-between px-11'>
        //         <img className='max-h-[100px] cursor-pointer' src={logo} alt="" />
        //         <div className='flex flex-row gap-12 justify-center items-center text-[20px]'>
        //             <a href="">Inicio</a>
        //             <a href="">Nosotros</a>
        //             <a href="">Servicios</a>
        //             <a href="">Contáctenos</a>
        //         </div>
        //     </div>

        // </div>
    );
};

export default NavBar;