import React, { useState } from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Servicios from '../components/Servicios/Servicios';
import ContactUs from '../components/ContactUs/ContactUs';
import img_R from '../images/stylMax_R.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const Home = () => {

    const [text] = useTypewriter({
        words: ['enacer', 'ejuvenecer', 'efrescar'],
        loop: {},
    })

    return (
        <>
            <NavBar />
            <div className="container mt-10">
                <div className='container'>
                    <>
                        <div className='container flex items-baseline'>
                            <img src={img_R} />
                            <h1 className='text-[100px] text-left text-[var(--color-lightbrown)]'>
                                <span className='mt-[-15px]'>
                                    {text}
                                </span>
                                <span>
                                    <Cursor />
                                </span>
                            </h1>
                        </div>
                        <AboutUs />
                        <Servicios
                        />
                        <ContactUs />
                    </>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;