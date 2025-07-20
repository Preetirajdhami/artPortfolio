import React from "react";
import Image from "next/image";

const MissionAndValues: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[500px] px-4 sm:px-6 md:px-8">
      <div className="bg-primary rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center w-full max-w-[300px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px]">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 mb-6 md:mb-0">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/missionGoals/mission.jpg"
              alt="Mission and Values"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:ml-16 text-white max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">
            Mission Values & Goal
          </h2>

          <p className="mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm">
            My mission is to express emotion, beauty, and personal stories
            through each piece I create. I value honesty in creativity,
            attention to detail, and the quiet power of visual art to connect
            with others. My goal is to grow as an artist while inspiring viewers
            through meaningful and thoughtfully crafted work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndValues;
