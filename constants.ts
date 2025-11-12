import { Page, Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cyber-stand',
    description: 'A minimalist and functional phone stand inspired by the Tesla Cybertruck.',
    pageLink: Page.Cyberstand,
  },
  {
    id: 2,
    title: 'Airflow Optimizer',
    description: 'A computational fluid dynamics project to optimize airflow in a custom PC case.',
    pageLink: Page.AirflowOptimizer,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'The very website you are looking at, built with React and Tailwind CSS.',
    pageLink: Page.PortfolioWebsite,
  },
  {
    id: 4,
    title: 'Smart Home Hub',
    description: 'A Raspberry Pi-based hub to control various smart devices in a home network.',
    pageLink: Page.SmartHomeHub,
  },
  {
    id: 5,
    title: 'AI Airflow Optimizer',
    description: 'An AI-powered tool to analyze and suggest optimal fan configurations in PC cases using Gemini.',
    pageLink: Page.AIAirflowOptimizer,
  },
];