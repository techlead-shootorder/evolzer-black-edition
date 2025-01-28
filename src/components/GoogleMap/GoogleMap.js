import React from "react";

const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28019.105126770002!2d77.382232!3d28.618127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff4f028983f%3A0xa99e585909342d13!2sShootOrder%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1723108543510!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </>
  );
};

export default GoogleMap;
