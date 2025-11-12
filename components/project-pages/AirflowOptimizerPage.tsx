import React from 'react';
import { Page } from '../../types';

interface AirflowOptimizerPageProps {
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

const AirflowOptimizerPage: React.FC<AirflowOptimizerPageProps> = ({ setPage }) => {
    return (
        <ProjectDetailPageLayout setPage={setPage} title="Airflow Optimizer">
            <p>
                Building a high-performance PC requires careful consideration of thermal management. This project aimed to optimize the airflow within a custom-built computer case using Computational Fluid Dynamics (CFD) simulation in Ansys Fluent. The process involved creating a 3D model of the PC interior, including all major components like the CPU cooler, GPU, and case fans. Different fan configurations and speeds were simulated to visualize airflow patterns and identify hotspots. The results led to tangible improvements, including repositioning an exhaust fan and adjusting fan curves, which lowered average CPU and GPU temperatures by 5-7°C under load. This project was a deep dive into fluid dynamics and its practical application in hardware optimization.
            </p>
        </ProjectDetailPageLayout>
    );
};

export default AirflowOptimizerPage;