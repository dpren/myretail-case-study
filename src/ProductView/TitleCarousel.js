import React from 'react';
import './ProductView.css';
import PhotoCarousel from './PhotoCarousel';




export default (props) => {
  return (
    <div className='title-carousel-container'>
      <h1 className='h1 title'>{props.title}</h1>
      <PhotoCarousel {...props} />
    </div>
  );
}
