import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar brand='ECG Toolbox' right>
        <Link to='/action-potential'>Action Potential</Link>
      </Navbar>
    </div>
  );
}

export default Navigation;