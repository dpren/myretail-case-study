import React from 'react';
import SlickCarousel from 'react-slick';

import './ProductView.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * This is essentially a wrapper around a react-slick carousel that displays
 * a large version of the selected image above.
 *
 * TODO: implement "view larger" feature
 *
 * @class ImageCarousel
 * @props {images}
 */
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
    beforeChange: this.slideChangeHandler,
  }

  render() {
    return (
      <div className=''>
        <img
          src={this.props.images[this.state.selectedIndex]}
          className='selected-image'
          alt=''
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
