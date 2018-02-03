import React from 'react';
import { Flex, Box } from 'grid-styled'

import './App.css';
import { CatalogEntryView as catalogEntries } from './item-data.json';
import ImageCarousel from './components/ProductView/ImageCarousel';
import ProductInfo from './components/ProductView/ProductInfo';
import Reviews from './components/ProductView/Reviews';



const catalogEntry = catalogEntries[0];
window.z = catalogEntry;

const images = catalogEntry.Images[0];
const primaryImage = images.PrimaryImage[0].image;
const alternateImages = images.AlternateImages.map(x => x.image);
const carouselImages = [primaryImage].concat(alternateImages);

const title = catalogEntry.title;
const price = catalogEntry.Offers[0].OfferPrice[0].formattedPriceValue;
const reviews = catalogEntry.CustomerReview[0];

const App = () => {
  return (
    <div className='mock-padding'>
      <div className='main-content'>
        <Flex wrap>
          <Box width={[1, 1, 1, 1/2]} px={0} className='title-carousel-container'>
            <h1 className='h1 title'>{title}</h1>
            <ImageCarousel images={carouselImages} />
          </Box>
          <Box width={[1, 1, 1, 1/2]} px={0} className='g'>
            <ProductInfo price={price} />
          </Box>
          <Box width={[1, 1, 1, 1/2]} px={0} className=''>
            <Reviews reviews={reviews} />
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default App;
