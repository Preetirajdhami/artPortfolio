"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Full-Screen Image Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero1.jpeg')" }}
        >
          {/* Overlay (optional) */}
          <div className="absolute inset-0 bg-text bg-opacity-50"></div>
        </div>

        {/* Animated hero content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to My Art Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mt-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore my work and commissions
          </motion.p>
        </motion.div>
      </div>

      {/* About Me, Skills, and Mission Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          {/* About Me */}
          <motion.div 
            className="bg- p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image first on small screens; text first on md screens */}
            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 order-1 md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/preeti.jpg" // Replace with your image path
                alt="About Me"
                className="w-[300px] h-auto rounded-lg"
              />
            </motion.div>
            <div className="md:w-1/2 pr-0 md:pr-6 order-2 md:order-1">
              <motion.h2 
                className="text-2xl font-bold text-left mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Welcome! I'm Preeti Rajdhami, a passionate artist specializing in graphite, charcoal, and acrylic paintings.
                My work is inspired by the natural beauty of the world and the profound depths of human emotion, blending delicate
                techniques with expressive energy to create art that tells a personal story.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="bg-[#DAC0A3] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-start"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/skills.jpg" // Replace with your image path
                alt="Skills"
                className="w-[300px] h-auto rounded-lg"
              />
            </motion.div>
            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <motion.h2 
                className="text-2xl font-bold text-left mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Skills
              </motion.h2>
              <motion.ul 
                className="text-gray-600 list-disc list-inside"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <li>Graphite and Charcoal Art</li>
                <li>Watercolor Painting</li>
                <li>Acrylic Painting</li>
              </motion.ul>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            className="bg-[#DAC0A3] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image first on small screens; text first on md screens */}
            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 order-1 md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/mission.jpg" 
                alt="Mission"
                className="w-[300px] h-auto rounded-lg"
              />
            </motion.div>
            <div className="md:w-1/2 pr-0 md:pr-6 order-2 md:order-1">
              <motion.h2 
                className="text-2xl font-bold text-left mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Mission
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                My mission is to create art that inspires and connects people, bringing beauty and emotion into everyday life.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
