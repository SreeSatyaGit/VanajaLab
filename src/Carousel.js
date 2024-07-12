import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import insulin from './images/insulin.png'; 

const ImageCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img src={insulin}  />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Image+2" alt="Image 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Image+3" alt="Image 3" />  
        </div>
      </Carousel>
    );
  };
  export default ImageCarousel;