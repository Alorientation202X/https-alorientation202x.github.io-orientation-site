import React from 'react';
import background from '../assets/background.jpg';

const layoutStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%',
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      {children}
    </div>
  );
};

export default Layout;

