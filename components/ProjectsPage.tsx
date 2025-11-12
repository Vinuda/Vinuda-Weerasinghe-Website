import React from 'react';
import { PROJECTS } from '../constants';
import { Project, Page } from '../types';

const ProjectListItem: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <button 
        onClick={onClick}
        className="w-full text-left p-6 border border-brand-border rounded-lg hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-brand-dark focus:ring-brand-light"
        aria-label={`View details for ${project.title}`}
    >
        <h3 className="font-serif text-2xl text-brand-light mb-2">{project.title}</h3>
        <p className="font-sans text-brand-gray">{project.description}</p>
    </button>
);

const ProjectsPage: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col gap-6">
                {PROJECTS.map(project => (
                    <ProjectListItem
                        key={project.id}
                        project={project}
                        onClick={() => setPage(project.pageLink)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;