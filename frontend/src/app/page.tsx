export default function Home() {
  return (
    <div className="bg-[#F6F1EB]">
      {/* Full-Screen Image Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/starry.jpg')" }}
        >
          {/* Overlay (optional) */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Art Portfolio</h1>
          <p className="text-xl md:text-2xl mt-4">Explore my work and commissions</p>
        </div>
      </div>

      {/* About Me, Skills, and Mission Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          {/* About Me */}
          <div className="bg-[#DAC0A3] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            {/* Image first on small screens; text first on md screens */}
            <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 order-1 md:order-2">
              <img
                src="/preeti.jpg" // Replace with your image path
                alt="About Me"
                className="w-[300px] h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 pr-0 md:pr-6 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-left mb-4">About Me</h2>
              <p className="text-gray-600">
                Welcome! I'm Preeti Rajdhami, a passionate artist specializing in graphite, charcoal, and acrylic paintings.
                My work is inspired by the natural beauty of the world and the profound depths of human emotion, blending delicate
                techniques with expressive energy to create art that tells a personal story.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#DAC0A3] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/skills.jpg" // Replace with your image path
                alt="Skills"
                className="w-[300px] h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold text-left mb-4">Skills</h2>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Graphite and Charcoal Art</li>
                <li>Watercolor Painting</li>
                <li>Acrylic Painting</li>
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#DAC0A3] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            {/* Image first on small screens; text first on md screens */}
            <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 order-1 md:order-2">
              <img
                src="/mission.jpg" // Replace with your image path
                alt="Mission"
                className="w-[300px] h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 pr-0 md:pr-6 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-left mb-4">Mission</h2>
              <p className="text-gray-600">
                My mission is to create art that inspires and connects people, bringing beauty and emotion into everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
