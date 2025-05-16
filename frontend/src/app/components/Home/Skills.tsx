import React from 'react';

const Skills: React.FC = () => {
  const skillData = [
    {
      title: "Graphite & Charcoal Art",
      description: "Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.",
    },
    {
      title: "Watercoor Painting",
      description: "Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.",
    },
    {
      title: "Acrylic Painting",
      description: "Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.",
    },
  ];

  return (
    <div className="text-center p-4 sm:p-6 md:p-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">Skills</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 md:gap-14">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="bg-background rounded-[50px] p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm border border-black mx-auto sm:mx-0"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">{skill.title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-primary">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;