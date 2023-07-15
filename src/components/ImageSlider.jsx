import React, { useEffect, useRef } from 'react';

const ImageSlider = () => {
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startScrolling = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          const { scrollWidth, clientWidth, scrollLeft } = scrollContainer;

          if (scrollLeft + clientWidth >= scrollWidth) {
            // Llegamos al final, volvemos a la primera imagen suavemente
            scrollContainer.scrollTo({
              left: 0,
              behavior: 'smooth',
            });
          } else {
            // Hacemos scroll hacia la derecha
            scrollContainer.scrollBy({
              left: clientWidth,
              behavior: 'smooth',
            });
          }
        }, 1500); // Intervalo de 3 segundos para el scroll automático
      }
    };

    const stopScrolling = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    scrollContainer.addEventListener('mouseenter', stopScrolling);
    scrollContainer.addEventListener('mouseleave', startScrolling);

    return () => {
      clearInterval(intervalRef.current);
      scrollContainer.removeEventListener('mouseenter', stopScrolling);
      scrollContainer.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  return (
    <div
      className="overflow-x-auto snap-x-mandatory relative"
      style={{ overflowX: 'hidden' }}
      ref={scrollContainerRef}
    >
      <div className="flex flex-nowrap snap-center">
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/brands/brands-starwars.png"
            alt="star wars"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/brands/brands-critical-role-244x244.jpg"
            alt="critical role"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/brands/brands-hottoys.png"
            alt="hot toys"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/brands/brands-disney.png"
            alt="critical role"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://sideshow-prod-media.s3.amazonaws.com/ss/media/brands/brands-harrypotter.png"
            alt="critical role"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://www.sideshow.com/storage/ss/media/brands/marvel.jpeg"
            alt="critical role"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://www.sideshow.com/storage/ss/media/brands/dcomics.jpeg"
            alt="critical role"
          />
        </div>
        <div className="flex-none w-32 h-32 snap-start mx-2">
          <img
            className="w-full h-full object-contain"
            src="https://www.sideshow.com/storage/ss/media/brands/lordoftherings.jpeg"
            alt="critical role"
          />
        </div>
        
      </div>
    </div>
  );
};

export default ImageSlider;
