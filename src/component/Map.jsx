import React from 'react';

const Map = () => {
  return (
    <div className=''>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6794.268009187101!2d76.58329544377173!3d31.63018114665546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390529ce8820b9c1%3A0xaa50e49327e0aab7!2sTaal%2C%20Himachal%20Pradesh%20177401!5e0!3m2!1sen!2sin!4v1744475966611!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
   
  );
};

export default Map;
