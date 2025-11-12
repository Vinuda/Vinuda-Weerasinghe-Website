import React from 'react';
import { Page } from '../../types';

interface AIAirflowOptimizerPageProps {
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

const AIAirflowOptimizerPage: React.FC<AIAirflowOptimizerPageProps> = ({ setPage }) => {
    return (
        <ProjectDetailPageLayout setPage={setPage} title="AI Airflow Optimizer">
            <p>
                This project leverages Google's Gemini API to create an intelligent airflow optimizer. Users can upload an image of their PC case interior, and the AI analyzes the component layout and existing fan setup. Based on a vast dataset of thermal dynamics principles and component specifications, the model provides customized recommendations to improve cooling efficiency. This includes suggesting adjustments to fan speeds, orientation (intake vs. exhaust), and even potential component relocation for better airflow paths. The frontend is built with React, allowing for an interactive experience where users can see the suggested changes visualized on their uploaded image. This tool bridges the gap between complex CFD analysis and practical, user-friendly PC building, making thermal optimization accessible to everyone.
            </p>
        </ProjectDetailPageLayout>
    );
};

export default AIAirflowOptimizerPage;