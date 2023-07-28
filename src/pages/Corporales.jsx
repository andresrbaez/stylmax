import React from 'react';
import img_R from '../images/stylMax_R.png'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const Corporales = () => {
    return (
        <>
            <NavBar />
            <div className='container flex items-baseline'>
                <h1 className='text-[100px] text-left text-[var(--color-lightbrown)]'>
                    <span className='mt-[-15px]'>
                        CORPORALES
                    </span>
                </h1>
            </div>
            <Footer />
        </>
    );
};

export default Corporales;