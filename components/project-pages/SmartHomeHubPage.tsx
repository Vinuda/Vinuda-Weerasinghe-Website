import React from 'react';
import { Page } from '../../types';

interface SmartHomeHubPageProps {
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

const SmartHomeHubPage: React.FC<SmartHomeHubPageProps> = ({ setPage }) => {
    return (
        <ProjectDetailPageLayout setPage={setPage} title="Smart Home Hub">
            <p>
                To unify the various smart devices in my home from different manufacturers, I developed a central control hub using a Raspberry Pi 4. The project runs on Home Assistant, an open-source home automation platform. I integrated devices operating on Zigbee, Z-Wave, and Wi-Fi protocols by using a multi-protocol USB stick. This involved writing custom YAML configurations and Python scripts to create complex automations, such as 'movie mode' which dims the lights, closes the blinds, and turns on the AV receiver with a single command. The hub provides a unified dashboard, accessible from any device on the local network, simplifying control and enabling powerful, interconnected smart home routines.
            </p>
        </ProjectDetailPageLayout>
    );
};

export default SmartHomeHubPage;