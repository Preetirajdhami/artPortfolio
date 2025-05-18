"use client";
import { useState } from 'react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const testimonials = [
    {
      title: "Client Experience",
      content: "Preeti captured exactly what I envisioned for my home. Her artwork brings so much life and personality to our living space.",
      author: "Sarah Johnson",
      image: "/hero1.jpeg"
    },
    {
      title: "Commission Process",
      content: "Working with Preeti was seamless from start to finish. She listened carefully to my ideas and delivered a piece that exceeded my expectations.",
      author: "Michael Chen",
      image: "/hero1.jpeg"
    },
    {
      title: "Quality & Craftsmanship",
      content: "The attention to detail in Preeti's work is remarkable. The painting I purchased is a masterpiece of technique and emotion.",
      author: "Emma Rodriguez",
      image: "/hero1.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-primary mb-8 md:mb-12 tracking-tight">
          What My Clients Say
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-10 z-10 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 transform hover:scale-110 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="flex w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-2 sm:px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-white rounded-xl shadow-lg flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 mx-auto mt-6 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">{testimonial.content}</p>
                        <p className="text-primary font-medium mt-4 text-sm sm:text-base">- {testimonial.author}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex bg-white rounded-xl shadow-lg flex-col h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 mx-auto mt-6 rounded-full overflow-hidden">
                        <Image
                          src={index === totalSlides - 1 ? testimonials[0].image : testimonials[index + 1].image}
                          alt={index === totalSlides - 1 ? testimonials[0].author : testimonials[index + 1].author}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                          {index === totalSlides - 1 ? testimonials[0].content : testimonials[index + 1].content}
                        </p>
                        <p className="text-primary font-medium mt-4 text-sm sm:text-base">
                          - {index === totalSlides - 1 ? testimonials[0].author : testimonials[index + 1].author}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex bg-white rounded-xl shadow-lg flex-col h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 mx-auto mt-6 rounded-full overflow-hidden">
                        <Image
                          src={index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].image : testimonials[index + 2].image}
                          alt={index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].author : testimonials[index + 2].author}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                          {index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].content : testimonials[index + 2].content}
                        </p>
                        <p className="text-primary font-medium mt-4 text-sm sm:text-base">
                          - {index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].author : testimonials[index + 2].author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-10 z-10 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 transform hover:scale-110 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;