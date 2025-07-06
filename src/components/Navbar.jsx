import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
    const [scrolled , setscrolled] = useState(false)

    useEffect(() => {
        const handlescroll = () => {
            const isscrolled = window.scrollY > 10
            setscrolled(true)
        }

        window.addEventListener('scroll' , handlescroll)

        return () => window.removeEventListener('scroll' , handlescroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' :
        'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    natkamol | onim
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline">
                                        
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Navbar