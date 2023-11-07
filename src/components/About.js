import React from 'react';
import "./styles/Styles.css";


function About() {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className="about-item">
                    <h3>ABOUT US</h3>
                    <div className='hr-line'></div>
                    <div>
                        <p className='about-text'>Our company <strong>PLC projects</strong> offers engineering and turn-key execution of generation, storage and distribution systems of ultra-pure water, purified water, water for injections, clean steam as well as process installations and solution preparation systems for the pharmaceutical industry and also cosmetic and food &amp; beverage industries.</p>
                        {/* <p>We manufacture purified water generators based on reverse osmosis and electrodeionization technology, pharmaceutical DTS shell and tube heat exchangers and a full range of water treatment systems. In addition, we cooperate with the leading European manufacturer of water for injections and clean steam generators as well as solution preparation systems - the Italian company <strong>BRAM-COR</strong>, representing this company on Eastern European market.</p> */}
                        {/* <p>Our range of activities is complemented by services on derouging and passivation of stainless steel pipelines and vessels by the means of neutral pH-based ecological products manufactured by the Swiss company <strong>ATECO</strong>.</p> */}
                        {/* <p>Our own highly qualified team of specialists offer assembly and installation of stainless steel pipelines by means of orbital welding, carried out in accordance with the cGMP rules of pharmaceutical industry.</p> */}
                        {/* <p>In addition to assembly works in stainless steel, we offer a full range of plastic piping installations: PVC, PP, PE, PVDF, including installations executed in technology of BCF (Bead and Crevice Free) welding.</p> */}
                        {/* <p>We offer to all our customers after-sales service. In order to ensure the highest comfort of operation of our facilities, we encourage you to conclude permanent maintenance agreements with our company.</p> */}
                    </div>
                    <div className='about-local'>
                        <div>

                            <img className='about-img' src='https://5.imimg.com/data5/SELLER/Default/2021/11/ON/CZ/QT/12402434/plc-hmi-programming-services-500x500.jpg' alt='programming' />
                        </div>
                        <div className="about-item">
                            <p className='about-title'>EXPERIENCE</p>
                            <p className='about-desc'>Our services are carried out by fully trained staff in accordance with the highest professional standards. Many years of experience accumulated by our specialists and continuous skills training allow us to provide services with high quality and quickly.</p>
                            <p className='about-title'>QUALITY</p>
                            <p className='about-desc'>The accumulated experience and professional knowledge of specialists ensure high-quality performance of services.</p>
                            <p className='about-title'>INNOVATION</p>
                            <p className='about-desc'>We use the latest technologies in the scope of process automation. These are modern hardware and software systems of world leaders (Siemens, Schneider Electric, ABB). Using innovative technologies, we help our clients to meet their production challenges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
