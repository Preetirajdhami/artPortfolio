import React from 'react';

const Skills: React.FC = () => {
  const skillData = [
    {
      title: "Graphite & Charcoal Art",
      description:
        "My journey began with graphite and charcoal, mastering precision and emotional depth to capture intricate details and expressive portraits.",
    },
    {
      title: "Watercolor Painting",
      description:
        "I discovered the delicate and fluid qualities of watercolor, allowing me to explore light, transparency, and subtle atmospheric effects.",
    },
    {
      title: "Acrylic Painting",
      description:
        "Acrylics introduced me to bold colors and dynamic textures, giving life to vibrant and modern compositions with versatile techniques.",
    },
  ];

  return (
    <div className="text-center p-4 sm:p-6 md:p-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-center mb-4 sm:mb-6 md:mb-8">
        Skills
      </h2>
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
