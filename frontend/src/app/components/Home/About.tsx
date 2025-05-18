import type React from "react"
import Image from "next/image"

const AboutSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-16 sm:mt-24 md:mt-36">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 sm:mb-12">About Me</h2>

      <div className="relative">
        <div className="flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full flex justify-center md:w-1/3 z-10 relative md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2">
            <div className="relative w-[180px] h-[240px] sm:w-[200px] sm:h-[280px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[420px] shadow-lg">
              <Image
                src="/about.png"
                alt="Artist portrait"
                fill
                className="rounded-2xl sm:rounded-3xl object-cover"
                sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 280px, 320px"
              />
            </div>
          </div>

          <div
            className="bg-primary text-white rounded-2xl sm:rounded-3xl w-full md:w-5/6 p-6 sm:p-8 md:p-12 
                          mt-4 sm:mt-[-40px] md:mt-0 md:ml-auto"
          >
            <div className="md:pl-[calc(33%-30px)] lg:pl-[calc(33%-10px)]">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 md:mb-8">My Artistic Journey</h3>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 sm:mt-1.5 flex-shrink-0 text-white">
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-6 sm:h-3"
                    >
                      <path
                        d="M23 6H1M23 6L18 1M23 6L18 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white/90">
                    With over 15 years of experience, I've developed a distinctive style that blends classical techniques with contemporary vision. My work has been featured in galleries across Europe and North America.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 sm:mt-1.5 flex-shrink-0 text-white">
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-6 sm:h-3"
                    >
                      <path
                        d="M23 6H1M23 6L18 1M23 6L18 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white/90">
                     deeply inspired by the natural world and urban landscapes. My paintings capture fleeting moments of light and atmosphere, inviting viewers to experience familiar scenes with fresh perspective.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 sm:mt-1.5 flex-shrink-0 text-white">
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-6 sm:h-3"
                    >
                      <path
                        d="M23 6H1M23 6L18 1M23 6L18 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white/90">
                    Every canvas begins with emotion rather than concept. I believe art should speak to both heart and mind, creating connections that transcend language and cultural boundaries.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 mt-1 sm:mt-1.5 flex-shrink-0 text-white">
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-6 sm:h-3"
                    >
                      <path
                        d="M23 6H1M23 6L18 1M23 6L18 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white/90">
                    Besides creating,  passionate about teaching. Through workshops and mentoring, I help emerging artists find their authentic voice while mastering technical foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection