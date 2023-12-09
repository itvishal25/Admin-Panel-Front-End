import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor:"white",
      color: 'black',
      padding: '5px',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}>
      <div>
        {/* Social Icons */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', margin: '0 10px' }}>
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', margin: '0 10px' }}>
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', margin: '0 10px' }}>
          <FaGithub size={30} />
        </a>
      </div>

      {/* Copyright Notice */}
      <p style={{ margin: '20px 0 0', fontSize: '14px' }}>© 2023 by Vishal and Kinjal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
