import React from 'react';
import "./styles/Styles.css";
import { GrFormClock, GrMailOption, GrMapLocation, GrPhone } from 'react-icons/gr';

function Contacts() {

  function call() {
    window.open('tel:+37060000000', '_self');
  }
function email() {
    window.location.href ='mailto:info@company.com';
  }
function navig() {
    window.open('https://www.google.com/maps/dir/55.7048182,21.1575783/Silicon+Valley,+Kalifornija,+Jungtin%C4%97s+Valstijos/@38.481725,-91.5876907,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808fb68ad0cfc739:0x7eb356b66bd4b50e!2m2!1d-122.0575434!2d37.387474!11m1!6b1?entry=ttu');
  }

  return (
    <div className="contacts">
      <div className="contact-container">
        <div className="contact-map">
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.2038442924754!2d-121.89102127730854!3d37.33376479598199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccbb439ea46b%3A0x78be976b86728add!2sSilicon%20Valley%20Capital%20Club!5e0!3m2!1sen!2slt!4v1699175575827!5m2!1sen!2slt" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <div className="contact-label">
          <GrMapLocation className="btn-default btn-label"/>
            <label className="btn-default btn-value" onClick={navig}>Silicon Valley</label>
          </div>
          <div className="contact-label">
            <GrPhone className="btn-default btn-label"/>
            <label className="btn-default btn-value" onClick={call}>+37060000000</label>
          </div>
          <div className="contact-label">
            <GrMailOption className="btn-default btn-label"/>
            <label className="btn-default btn-value" onClick={email}>info@company.com</label>
          </div>
          <div className="contact-label">
            <GrFormClock className="btn-default btn-label"/>
            <label className="btn-default btn-value">I-V 10.00 - 18.00</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts

