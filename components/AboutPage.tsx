import React, { useState, useEffect, useRef } from 'react';

const SkillItem: React.FC<{ name: string; description: string; isVisible: boolean; delay: number; }> = ({ name, description, isVisible, delay }) => (
    <li
        className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        {name} <span className="text-brand-gray">- {description}</span>
    </li>
);

const creativeSkills = [
    { name: "Adobe Premiere Pro", description: "Video Editing" },
    { name: "Adobe Photoshop", description: "Photo Editing" },
    { name: "Fusion 360", description: "CAD Design" },
];

const technicalSkills = [
    { name: "C & C#", description: "Programming (Learning)" },
    { name: "Python & MATLAB", description: "Computation" },
    { name: "Lathing & Milling", description: "Machining" },
];

const AboutPage: React.FC = () => {
    const toolkitRef = useRef<HTMLDivElement>(null);
    const [isToolkitVisible, setIsToolkitVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsToolkitVisible(true);
                    if (toolkitRef.current) {
                        observer.unobserve(toolkitRef.current);
                    }
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (toolkitRef.current) {
            observer.observe(toolkitRef.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (toolkitRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(toolkitRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full max-w-4xl text-left">
            <div className="mb-10">
                <h2 className="font-serif text-4xl text-brand-light mb-4">A little about me....</h2>
                <p className="text-brand-light/90 whitespace-pre-wrap font-sans leading-relaxed">
                    I am a second-year Manufacturing Engineering student at the University of British Columbia. I chose this field after watching a video where Elon Musk explained that while many people can design beautiful products, few can create designs that are both elegant and manufacturable at scale. Coming from a small island in Sri Lanka, I see great potential for growth in the country's manufacturing industry. My goal is to return home with the knowledge and experience needed to help drive that progress.
                    <br /><br />
                    I enjoy going to the gym, playing golf, and watching sports. Since moving to North America, I've developed an interest in American football. At first, I watched it simply because it was often the only sport available in my free time, but now I watch it to appreciate the incredible athleticism and the exciting plays that unfold each week.
                </p>
            </div>

            <div ref={toolkitRef}>
                <h2 className="font-serif text-4xl text-brand-light mb-8 text-center">My Toolkit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
                    {/* Column 1: Creative & Design */}
                    <div>
                        <h3 className="font-serif text-2xl text-brand-light border-b border-brand-border pb-2 mb-4 text-center md:text-left">Creative & Design</h3>
                        <ul className="space-y-3 font-sans text-brand-light/90 text-lg text-center md:text-left">
                            {creativeSkills.map((skill, index) => (
                                <SkillItem 
                                    key={skill.name}
                                    name={skill.name}
                                    description={skill.description}
                                    isVisible={isToolkitVisible}
                                    delay={index * 100}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Technical & Engineering */}
                    <div>
                        <h3 className="font-serif text-2xl text-brand-light border-b border-brand-border pb-2 mb-4 text-center md:text-left">Technical & Engineering</h3>
                        <ul className="space-y-3 font-sans text-brand-light/90 text-lg text-center md:text-left">
                           {technicalSkills.map((skill, index) => (
                                <SkillItem 
                                    key={skill.name}
                                    name={skill.name}
                                    description={skill.description}
                                    isVisible={isToolkitVisible}
                                    delay={(creativeSkills.length + index) * 100}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;