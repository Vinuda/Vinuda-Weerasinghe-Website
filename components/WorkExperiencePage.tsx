import React, { useEffect, useRef, useState } from 'react';

interface WorkExperience {
  company: string;
  year: string;
  role: string;
  description: string;
}

const experiences: WorkExperience[] = [
    {
        company: 'MAS Intimates',
        year: '2025',
        role: 'Engineering Intern',
        description: 'I was introduced to every stage of the garment design and production process at MAS Intimates, one of the largest garment manufacturers in the world. I worked across both the design and sampling phases, as well as on the factory floor, where I focused on improving processes and increasing efficiency during bulk production. I am very grateful for the opportunity I had ar MAS, as it allowed me to witness firsthand how a large-scale manufacturing operation with over 100,000 employees functions—and how it can positively impact the lives of so many Sri Lankans. Experiencing the company’s commitment to innovation and automation reinforced my belief that the future of manufacturing lies in automation.',
    },
    {
        company: 'Jafferjee and Brothers Securities',
        year: '2023',
        role: 'Intern',
        description: 'I am interested in doing business in Sri Lanka, and in 2023 I had the opportunity to shadow Mr. Murtaza Jafferjee as an intern at Jafferjee and Brother Securities. I attended meetings with some of the largest companies in Sri Lanka, learning from Mr. Jafferjee about the nature of the Sri Lankan markets and the dynamics of doing business there. At the time, Sri Lanka was recovering from a challenging period of heightened instability, and gaining insights from Mr. Jafferjee on how he navigated his own business—as well as observing how other companies managed through difficult times—provided me with invaluable lessons.',
    },
    {
        company: 'ADA Sri Lanka',
        year: '2022',
        role: 'Creative Intern',
        description: 'I was keen to understand marketing and how data and analytics can be used to enhance brand image and outreach. I worked on a campaign for ZESTA Tea, a prominent Sri Lankan tea brand, where I created their social media posts for a month—analyzing trends, product launches, and interactive content to increase user engagement. I learned a great deal about the power of data-driven marketing, as well as the art and science of creating posts that genuinely capture consumer attention rather than being scrolled past.Find the posts I made for ZESTA below.',
    }
];

const ExperienceSection: React.FC<{ experience: WorkExperience; isVisible: boolean }> = ({ experience, isVisible }) => {
    return (
        <div className={`transition-all duration-1000 ease-in-out transform text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-light">
                {experience.company} – <span className="text-brand-gray">{experience.year}</span>
            </h2>
            <h3 className="font-sans text-xl text-brand-light/90 mt-2 mb-4">{experience.role}</h3>
            <p className="font-sans text-brand-light/80 leading-relaxed max-w-3xl mx-auto text-left">
                {experience.description}
            </p>
        </div>
    );
};


const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.2) => {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIntersecting(true);
                    if(ref.current){
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if(ref.current) {
                 // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current)
            }
        };
    }, [ref, threshold]);
  
    return isIntersecting;
};

const WorkExperiencePage: React.FC = () => {
    const refs = experiences.map(() => useRef<HTMLDivElement>(null));
    const visibilities = refs.map(ref => useOnScreen(ref));

    return (
        <div className="w-full max-w-5xl py-12">
            <div className="space-y-24">
                {experiences.map((exp, index) => (
                    <div key={exp.company}>
                        <div ref={refs[index]}>
                            <ExperienceSection experience={exp} isVisible={visibilities[index]} />
                        </div>
                        {index < experiences.length - 1 && (
                            <hr className="border-t border-brand-border my-24 w-1/2 mx-auto" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperiencePage;
