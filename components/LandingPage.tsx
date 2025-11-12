import React from 'react';
import { Page } from '../types';

interface LandingPageProps {
  setPage: (page: Page) => void;
}

const NavButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="font-serif text-lg text-brand-light border border-brand-border rounded-full px-6 py-2 hover:bg-brand-light hover:text-brand-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-light shadow-[0_0_10px_rgba(224,224,224,0.1)] hover:shadow-[0_0_20px_rgba(224,224,224,0.3)]"
  >
    {children}
  </button>
);

const LandingPage: React.FC<LandingPageProps> = ({ setPage }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full w-full">
      <h1 className="font-serif text-7xl md:text-8xl text-brand-light mb-6 tracking-wider">
        γ
      </h1>
      <h2 className="font-serif text-4xl md:text-5xl text-brand-light mb-12">
        Vinuda Weerasinghe
      </h2>
      <nav className="flex flex-wrap items-center justify-center gap-4">
        <NavButton onClick={() => setPage(Page.Projects)}>Projects</NavButton>
        <NavButton onClick={() => setPage(Page.About)}>About Me</NavButton>
        <NavButton onClick={() => setPage(Page.WorkExperience)}>Work Experience</NavButton>
        <NavButton onClick={() => setPage(Page.Contact)}>Contact me</NavButton>
        <NavButton onClick={() => setPage(Page.Creative)}>Creative</NavButton>
        <NavButton onClick={() => setPage(Page.Library)}>Library</NavButton>
      </nav>
    </div>
  );
};

export default LandingPage;