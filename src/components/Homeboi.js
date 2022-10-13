import React, { createFactory } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' style={{ textDecoration: 'none', fontSize: '2rem' }}>
      ᕕ(⌐■_■)ᕗ ♪♬
    </Link>
  );
};

export default Logo;
