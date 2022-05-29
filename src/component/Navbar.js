import React from 'react';
import '../App.css';
export default function Navbar() {
  return (
    <div className='navbar'>
      <h1>The<span>Cocktail</span>DB</h1>
      <ul>
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
      </ul>
    </div>
  );
}
