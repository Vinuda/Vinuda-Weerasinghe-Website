import React from 'react';
import { Page } from '../../types';

interface PortfolioWebsitePageProps {
    setPage: (page: Page) => void;
}

const ProjectDetailPageLayout: React.FC<{ children: React.ReactNode, setPage: (page: Page) => void, title: string }> = ({ children, setPage, title }) => (
    <div className="w-full max-w-4xl text-left font-serif text-brand-light/90 leading-relaxed text-lg px-4 sm:px-0">
        <button
            onClick={() => setPage(Page.Projects)}
            className="font-serif text-lg text-brand-gray hover:text-brand-light transition-colors duration-300 mb-8 flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-light rounded-md px-2 py-1 -ml-2"
            aria-label="Go back to projects page"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
        </button>

        <h1 className="text-5xl text-brand-light font-serif mb-8 text-center animate-pulse-glow">{title}</h1>
        
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const PortfolioWebsitePage: React.FC<PortfolioWebsitePageProps> = ({ setPage }) => {
    return (
        <ProjectDetailPageLayout setPage={setPage} title="Portfolio Website">
            <p>
                This portfolio is a testament to the power of modern frontend technologies. Built from the ground up with React and TypeScript, it leverages functional components and hooks for state management. Styling is handled by Tailwind CSS, allowing for rapid development of a responsive, utility-first design that maintains the minimalist aesthetic I envisioned. The site is a single-page application (SPA) with smooth, animated transitions between sections, providing a seamless user experience. The entire development process emphasized clean, readable, and performant code, ensuring the site is not only visually appealing but also accessible and fast-loading across all devices.
            </p>
        </ProjectDetailPageLayout>
    );
};

export default PortfolioWebsitePage;