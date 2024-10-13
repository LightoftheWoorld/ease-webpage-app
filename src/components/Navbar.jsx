import Ease from "../assets/Ease.png";
import { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [isDark, setIsDark] = useState(true);

    const handleNavClick = (sectionId) => {
        setIsOpen(false);

        // Scroll to the section with the specified id
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <header className="flex justify-between items-center border border-black rounded-lg px-6 py-5 bg-white">
            <img src={Ease} alt="Ease" className="w-8 h-8" />

            <div className="flex gap-3">
                <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
                    <FaGripLines size={24} />
                </button>
                <button className="md:hidden block" onClick={() => setIsDark(!isDark)}>
                    {isDark ? <AiOutlineSun size={24} /> : <AiOutlineMoon size={24} />}
                </button>
            </div>

            <nav className="hidden md:flex space-x-6 items-center">
                {/* <a href="#about" onClick={() => handleNavClick('about')} className="text-sm">About</a> */}
                <a href="#features" onClick={() => handleNavClick('features')} className="text-sm">Features</a>
                <a href="#card" onClick={() => handleNavClick('waitlist')} className="text-sm">Join Waitlist</a>
                {/* <a href="#pricing" onClick={() => handleNavClick('pricing')} className="text-sm">Pricing</a> */}
                {/* <a href="#investors" onClick={() => handleNavClick('investors')} className="text-sm">Our Investors</a> */}
                <a href="mailto:team@easecommerce.xyz" className="text-sm py-3 px-6 bg-black text-white rounded-lg">Contact Us</a>
            </nav>

            <motion.nav
                ref={menuRef}
                className="md:hidden bg-white shadow-md p-4 border border-black rounded-lg flex flex-col items-center space-y-4 py-4 absolute top-0 left-0 right-0"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <button className="md:hidden block self-end" onClick={() => setIsOpen(!isOpen)}>
                    <AiOutlineClose size={24} />
                </button>
                {/* <a href="#about" onClick={() => handleNavClick('about')} className="text-sm">About</a> */}
                <a href="#features" onClick={() => handleNavClick('features')} className="text-sm">Features</a>
                <a href="#card" onClick={() => handleNavClick('waitlist')} className="text-sm">Join Waitlist</a>
                {/* <a href="#pricing" onClick={() => handleNavClick('pricing')} className="text-sm">Pricing</a> */}
                {/* <a href="#investors" onClick={() => handleNavClick('investors')} className="text-sm">Our Investors</a> */}
                <a href="mailto:team@easecommerce.xyz" className="text-sm py-3 px-6 bg-black text-white rounded-lg">Contact Us</a>
            </motion.nav>
        </header>
    );
};

export default Navbar;
