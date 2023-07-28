import React from 'react';

const Footer = () => {
    return (
        <div className='w-full border-[var(--color-extralightblack)] border-t'>
            <div className='footer container'>
                <div>
                    <h5>
                        Copyright © 2023 Styl Max
                    </h5>
                    <div className='icon-container'>
                        <a
                            href="https://www.facebook.com/stylmax2021"
                            target="_blank"
                            className='a-decoration'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className='bx bxl-facebook icon-size' aria-hidden='true'></i>
                        </a>
                        <a
                            href="https://www.instagram.com/stylmaxbeauty/"
                            target="_blank"
                            className='a-decoration'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className='bx bxl-instagram icon-size' aria-hidden='true'></i>
                        </a>
                        <a
                            href="https://wa.me/573245976325"
                            target="_blank"
                            className='a-decoration'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className='bx bxl-whatsapp icon-size' aria-hidden='true'></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;