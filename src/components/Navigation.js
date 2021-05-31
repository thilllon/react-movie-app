import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}
