import React,{useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
        <p className='logo'>ECO FORECAST</p>
        <ul>
            <li>HOME</li>
            <li>FORESIGHT</li>
            <li>INSIGHTS</li>
            <li>ADMIN</li>
        </ul>
    </nav>
  )
}

export default Navbar
