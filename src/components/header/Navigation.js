import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar brand='ECG Toolbox' right>
        <li><Link to='/action-potential'>Action Potential</Link></li>
        <li><Link to='/drugs-and-electrolytes'>Drugs and Electrolytes</Link></li>
      </Navbar>
    </div>
  );
}

export default Navigation;