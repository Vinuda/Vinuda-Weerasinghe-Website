import React, { useState, useEffect } from 'react';
import { Page } from './types';
import LandingPage from './components/LandingPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import LibraryPage from './components/LibraryPage';
import CreativePage from './components/CreativePage';
import Header from './components/Header';
import ShootingStarsCanvas from './components/ShootingStarsCanvas';
import AboutPage from './components/AboutPage';
import WorkExperiencePage from './components/WorkExperiencePage';

// Project Pages
import CyberstandPage from './components/project-pages/CyberstandPage';
import AirflowOptimizerPage from './components/project-pages/AirflowOptimizerPage';
import PortfolioWebsitePage from './components/project-pages/PortfolioWebsitePage';
import SmartHomeHubPage from './components/project-pages/SmartHomeHubPage';
import AIAirflowOptimizerPage from './components/project-pages/AIAirflowOptimizerPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Landing);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');
  const [nextPage, setNextPage] = useState<Page | null>(null);

  const handleSetPage = (page: Page) => {
    if (page === currentPage) return;
    setNextPage(page);
    setAnimationClass('animate-fade-out');
  };

  useEffect(() => {
    if (animationClass === 'animate-fade-out') {
      const timer = setTimeout(() => {
        if (nextPage) {
          setCurrentPage(nextPage);
          setAnimationClass('animate-fade-in');
          setNextPage(null);
        }
      }, 500); // This duration must match the CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [animationClass, nextPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Projects:
        return <ProjectsPage setPage={handleSetPage} />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.Library:
        return <LibraryPage />;
      case Page.Creative:
        return <CreativePage />;
      case Page.WorkExperience:
        return <WorkExperiencePage />;
      // Project Pages
      case Page.Cyberstand:
        return <CyberstandPage setPage={handleSetPage} />;
      case Page.AirflowOptimizer:
        return <AirflowOptimizerPage setPage={handleSetPage} />;
      case Page.PortfolioWebsite:
        return <PortfolioWebsitePage setPage={handleSetPage} />;
      case Page.SmartHomeHub:
        return <SmartHomeHubPage setPage={handleSetPage} />;
      case Page.AIAirflowOptimizer:
        return <AIAirflowOptimizerPage setPage={handleSetPage} />;
      case Page.Landing:
      default:
        // This case is handled by the main return logic
        return null;
    }
  };

  const getPageTitle = (page: Page) => {
    switch (page) {
        case Page.About:
            return 'About me';
        case Page.WorkExperience:
            return 'Work Experience';
        // Project Titles
        case Page.Cyberstand:
            return 'Cyber-stand';
        case Page.AirflowOptimizer:
            return 'Airflow Optimizer';
        case Page.PortfolioWebsite:
            return 'Portfolio Website';
        case Page.SmartHomeHub:
            return 'Smart Home Hub';
        case Page.AIAirflowOptimizer:
            return 'AI Airflow Optimizer';
        default:
            return page.charAt(0) + page.slice(1).toLowerCase();
    }
  };

  const pageTitle = getPageTitle(currentPage);

  if (currentPage === Page.Landing) {
    return (
      <div className={`bg-black text-brand-light font-sans min-h-screen w-full flex items-center justify-center p-4 sm:p-8 selection:bg-brand-light selection:text-brand-dark relative overflow-hidden ${animationClass}`}>
        <div id="stars1" />
        <div id="stars2" />
        <div id="stars3" />
        <ShootingStarsCanvas />
        <div className="relative z-10">
          <LandingPage setPage={handleSetPage} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark text-brand-light font-sans min-h-screen w-full flex flex-col items-center p-4 sm:p-8 selection:bg-brand-light selection:text-brand-dark">
      <div className="w-full max-w-5xl flex flex-col flex-grow h-full">
        <Header title={pageTitle} setPage={handleSetPage} />
        <main className={`flex-grow flex items-center justify-center w-full ${animationClass}`}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;