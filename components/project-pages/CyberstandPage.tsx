import React from 'react';
import { Page } from '../../types';

interface CyberstandPageProps {
    setPage: (page: Page) => void;
}

const ImageWithGlow: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <div className="bg-brand-dark/50 p-2 rounded-2xl shadow-[0_0_25px_rgba(224,224,224,0.1)]">
        <img src={src} alt={alt} className="rounded-xl w-full object-cover" />
    </div>
);

const CyberstandPage: React.FC<CyberstandPageProps> = ({ setPage }) => {
    return (
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

            <p className="mb-12">
                I was looking for a phone dock that could charge my phone and AirPods at the same time. I wanted something unique—a piece that would look great on my desk even when it wasn't in use. While searching, I noticed it was surprisingly difficult to find one that didn't include an Apple Watch charger. Although many people own an iPhone, AirPods, and an Apple Watch, I prefer mechanical watches and don't need that attachment. I also found that most of these docks look almost identical, which inspired me to design my own phone stand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 items-center">
                <ImageWithGlow src="https://storage.googleapis.com/aai-web-samples/portfolio/cyberstand-render1.png" alt="Cyber-stand isometric view" />
                <ImageWithGlow src="https://storage.googleapis.com/aai-web-samples/portfolio/cyberstand-render2.png" alt="Cyber-stand side view" />
            </div>

            <p className="mb-12 max-w-3xl mx-auto text-center">
                Inspired by the side profile of the TESLA Cybertruck, this stand features a unique geometry with clean lines. Using Apple's Magsafe technology, when in use, the stand gives the illusion of the devices floating, elevating the overall look of one's desk setup.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="w-full sm:w-1/2">
                    <ImageWithGlow src="https://storage.googleapis.com/aai-web-samples/portfolio/cyberstand-render3.png" alt="Cyber-stand bottom view" />
                </div>
                <p className="w-full sm:w-1/2 text-center sm:text-left">
                    I will be manufacturing a metal version of this phone stand, stay tuned for updates.
                </p>
            </div>
        </div>
    );
};

export default CyberstandPage;