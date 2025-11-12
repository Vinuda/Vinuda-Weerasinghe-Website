import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  title: string;
  setPage: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; setPage: (page: Page) => void; closeMenu: () => void; children: React.ReactNode }> = 
({ page, setPage, closeMenu, children }) => {
    const handleClick = () => {
        setPage(page);
        closeMenu();
    };
    return (
        <button
            onClick={handleClick}
            className="font-serif text-4xl text-brand-gray hover:text-brand-light transition-colors duration-300 focus:outline-none"
        >
            {children}
        </button>
    );
};


const Header: React.FC<HeaderProps> = ({ title, setPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const AllPages = [
        { page: Page.Landing, label: 'Home' },
        { page: Page.Projects, label: 'Projects' },
        { page: Page.About, label: 'About' },
        { page: Page.WorkExperience, label: 'Work Experience' },
        { page: Page.Creative, label: 'Creative' },
        { page: Page.Contact, label: 'Contact' },
        { page: Page.Library, label: 'Library' },
    ];


    return (
        <>
            <header className="w-full pt-8 pb-12 sm:pb-20 flex justify-between items-center">
                {/* Left: Logo */}
                <div className="flex-1">
                    <button
                        onClick={() => setPage(Page.Landing)}
                        className="font-serif text-5xl text-brand-gray hover:text-brand-light transition-colors duration-300 focus:outline-none"
                        aria-label="Go to homepage"
                    >
                        γ
                    </button>
                </div>

                {/* Center: Title */}
                <div className="flex-1 text-center hidden sm:block">
                    <h1 className="font-serif text-4xl sm:text-5xl text-brand-light">{title}</h1>
                </div>

                {/* Right: Hamburger Menu */}
                <div className="flex-1 flex justify-end">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-8 h-8 relative focus:outline-none z-[60]"
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="navigation-menu"
                    >
                        <span className={`block w-full h-0.5 bg-brand-light absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1/4 -translate-y-1/4'}`}></span>
                        <span className={`block w-full h-0.5 bg-brand-light absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-full h-0.5 bg-brand-light absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-1/4 translate-y-1/4'}`}></span>
                    </button>
                </div>
            </header>

            {/* Menu Overlay */}
            {isMenuOpen && (
                <div
                    id="navigation-menu"
                    className="fixed inset-0 bg-brand-dark/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                >
                    <nav className="flex flex-col items-center gap-8">
                        {AllPages.map(({ page, label }) => (
                           <NavLink key={page} page={page} setPage={setPage} closeMenu={() => setIsMenuOpen(false)}>
                               {label}
                           </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;