import React, { useState } from 'react';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleClick = () => {
    setIsToggle(!isToggle);
  }
  return (
    <header>
      <a href="#" className='logo'><h3>로고</h3></a>
      <div className='hamburger' onClick={handleClick}>
        <span className={isToggle ? "bar close1" : "bar bar1"}></span>
        <span className="bar bar2" style={isToggle ? { width: '0' } : { width: '17px' }}></span>
        <span className={isToggle ? "bar close2" : "bar bar3"}></span>
      </div>
      <ul className={isToggle ? "globalMenu" : "globalMenu menuClose"}>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>contact</li>
      </ul>
    </header>
  );
};

export default Header;