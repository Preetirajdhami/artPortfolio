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
      image: "/testimonial1.jpg"
    },
    {
      title: "Commission Process",
      content: "Working with Preeti was seamless from start to finish. She listened carefully to my ideas and delivered a piece that exceeded my expectations.",
      author: "Michael Chen",
      image: "/testimonial2.jpg"
    },
    {
      title: "Quality & Craftsmanship",
      content: "The attention to detail in Preeti's work is remarkable. The painting I purchased is a masterpiece of technique and emotion.",
      author: "Emma Rodriguez",
      image: "/testimonial3.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="py-10 md:py-16 relative" style={{ backgroundColor: '#d3c4b5' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-8 md:mb-10">
          Testimonials
        </h2>
        
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:left-0 z-10 text-white hover:text-gray-200 transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Slider Content */}
          <div className="flex w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-2 sm:px-4 md:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* First card */}
                    <div className="bg-white rounded shadow-sm flex flex-col h-full overflow-hidden">
                      <div className="relative h-40 w-full">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h3 className="text-xl md:text-2xl font-serif mb-2">{testimonial.title}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.content}</p>
                        <p className="text-gray-800 font-medium mt-3 text-sm">- {testimonial.author}</p>
                      </div>
                    </div>
                    
                    {/* Second card */}
                    <div className="bg-white rounded shadow-sm flex flex-col h-full overflow-hidden">
                      <div className="relative h-40 w-full">
                        <Image 
                          src={index === totalSlides - 1 ? testimonials[0].image : testimonials[index + 1].image} 
                          alt={index === totalSlides - 1 ? testimonials[0].title : testimonials[index + 1].title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h3 className="text-xl md:text-2xl font-serif mb-2">
                          {index === totalSlides - 1 ? testimonials[0].title : testimonials[index + 1].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {index === totalSlides - 1 ? testimonials[0].content : testimonials[index + 1].content}
                        </p>
                        <p className="text-gray-800 font-medium mt-3 text-sm">
                          - {index === totalSlides - 1 ? testimonials[0].author : testimonials[index + 1].author}
                        </p>
                      </div>
                    </div>
                    
                    {/* Third card */}
                    <div className="bg-white rounded shadow-sm flex flex-col h-full overflow-hidden">
                      <div className="relative h-40 w-full">
                        <Image 
                          src={index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].image : testimonials[index + 2].image} 
                          alt={index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].title : testimonials[index + 2].title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h3 className="text-xl md:text-2xl font-serif mb-2">
                          {index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].title : testimonials[index + 2].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {index >= totalSlides - 2 ? testimonials[index - (totalSlides - 2)].content : testimonials[index + 2].content}
                        </p>
                        <p className="text-gray-800 font-medium mt-3 text-sm">
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
            className="absolute -right-2 md:right-0 z-10 text-white hover:text-gray-200 transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
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