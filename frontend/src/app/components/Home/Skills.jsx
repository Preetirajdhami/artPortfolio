// components/Skills.tsx

import React from 'react';

const skills = [
  {
    title: 'Pencil & Charcoal',
    description: 'Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.',
  },
  {
    title: 'Watercolor',
    description: 'Soft, translucent layers bring a dreamy and expressive quality to each composition.',
  },
  {
    title: 'Acrylic & Mixed Media',
    description: 'Bold colors and texture-rich techniques bring modern and dynamic energy to your art.',
  },
];

const Skills = () => {
  return (
    <section
      className="relative py-16 px-6 lg:px-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-textColor">
        <h2 className="text-4xl font-bold mb-10">My Artistic Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl p-6 text-left shadow-md backdrop-blur-sm"
            >
              <h3 className="font-semibold text-lg mb-2 text-primary">{skill.title}</h3>
              <p className="text-gray-700 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
