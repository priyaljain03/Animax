import React from 'react';
import {Link} from "react-router-dom"
import '../css/Logo.css'

function Logo() {
  return (
    <div >
      <Link to='/' className="logo">ani<span style={{color:'orange'}}>max</span></Link>
    </div>
    
  )
}

export default Logo