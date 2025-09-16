import React from "react";

export default function Gallery() {
  const images = Array.from({ length: 8 }, (_, i) => `/images/home/gallery/${i + 1}.jpg`);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Our Gallery
          </h2>
          <p data-aos="fade-up" className="mt-4 text-xl text-gray-600">
            Take a look at some of our favorite moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="aspect-square relative">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  style={{
                    imageRendering: 'auto',
                    backgroundColor: '#f0f0f0'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 