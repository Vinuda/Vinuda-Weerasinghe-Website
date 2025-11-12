export enum Page {
  Landing = 'LANDING',
  Projects = 'PROJECTS',
  About = 'ABOUT',
  Contact = 'CONTACT',
  Creative = 'CREATIVE',
  Library = 'LIBRARY',
  WorkExperience = 'WORK_EXPERIENCE',

  // Project Pages
  Cyberstand = 'CYBERSTAND',
  AirflowOptimizer = 'AIRFLOW_OPTIMIZER',
  PortfolioWebsite = 'PORTFOLIO_WEBSITE',
  SmartHomeHub = 'SMART_HOME_HUB',
  AIAirflowOptimizer = 'AI_AIRFLOW_OPTIMIZER',
}

export interface Project {
  id: number;
  title: string;
  description: string;
  pageLink: Page;
}