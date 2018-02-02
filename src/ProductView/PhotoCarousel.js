import React from 'react';
import './ProductView.css';

import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// let state = {
//   slideIndex: 0
// };

// const changeHandler = (e) => {
//     this.setState({ slideIndex: e.target.value })
//     this.refs.slider.slickGoTo(e.target.value)
// };

const afterChangeHandler = (e) => {
    // this.setState({ slideIndex: e.target.value })
    // this.refs.slider.slickGoTo(e.target.value)
  console.log('e', e);
};

const carouselSettings = {
  // adaptiveHeight: true,
  centerMode: true,
  centerPadding: -15,
  focusOnSelect: true,
  slidesToShow: 3,
  swipe: false,
  afterChange: afterChangeHandler,
};


export default (props) => {
  return (
    <div className='photo-carousel-container'>
      <div style={{height: 50}}></div>
      <img src={props.primaryImage} className='primary-image' alt={props.altText || ''} />
      <div style={{height: 80}}></div>
      <div className='carousel-thumbnail-container'>
        <Carousel {...carouselSettings}>
          {props.carouselImages.map((src, index) =>
            <div key={index}><img src={src} alt='' /></div>
          )}
        </Carousel>
      </div>
    </div>
  );
}
