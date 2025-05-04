import React from 'react';

const Skills: React.FC = () => {
  const skillData = [
    {
      title: "Pencil & Charcoal",
      description: "Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.",
    },
    {
      title: "Pencil & Charcoal",
      description: "Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.",
    },
    {
      title: "Pencil & Charcoal",
      description: "Known for their precision and depth, these mediums are ideal for capturing fine details and emotional expression.",
    },
  ];

  return (
    <div className="text-center p-10">
      <div className="flex justify-center gap-6">
        {skillData.map((skill, index) => (
          <div 
            key={index} 
            className="bg-amber-50 rounded-3xl p-6 max-w-xs"
            style={{ width: '220px' }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;