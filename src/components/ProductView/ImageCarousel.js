import React from 'react';
import SlickCarousel from 'react-slick';

import './ProductView.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default class ImageCarousel extends React.Component {
  // initial slide
  state = { selectedIndex: 0 };

  slideChangeHandler = (oldIndex, newIndex) => {
    this.setState({ selectedIndex: newIndex })
  }

  slickSettings = {
    centerMode: true,
    centerPadding: -15,
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 0,
    swipe: false,
    initialSlide: this.selectedIndex,
    beforeChange: this.slideChangeHandler,
  }

  render() {
    return (
      <div className=''>
        <img
          src={this.props.images[this.state.selectedIndex]}
          className='selected-image'
          alt={this.props.altText || ''}
        />
        <div className='carousel-thumbnail-container'>
          <SlickCarousel {...this.slickSettings}>
            {this.props.images.map((src, index) =>
              <div key={index}><img src={src} alt='' /></div>
            )}
          </SlickCarousel>
        </div>
      </div>
    );
  }
}
