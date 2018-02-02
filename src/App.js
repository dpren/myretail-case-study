import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CatalogEntryView as catalogEntries } from './item-data.json';
import TitleCarousel from './ProductView/TitleCarousel';
import Detail from './ProductView/Detail';
import Reviews from './ProductView/Reviews';


import { Flex, Box } from 'grid-styled'



const catalogEntry = catalogEntries[0];
window.z = catalogEntry;

const images = catalogEntry.Images[0];
const primaryImage = images.PrimaryImage[0].image;
const alternateImages = images.AlternateImages.map(x => x.image);
const carouselImages = [primaryImage].concat(alternateImages);

const title = catalogEntry.title;
const price = catalogEntry.Offers[0].OfferPrice[0].formattedPriceValue;

const App = () => {
  return (
    <div className='mock-padding'>
      <div className='main-content'>
        <Flex wrap>
          <Box width={[1, 1, 1, 1/2]} px={0} className='r'>
            <TitleCarousel carouselImages={carouselImages} primaryImage={primaryImage} title={title} />
          </Box>
          <Box width={[1, 1, 1, 1/2]} px={0} className='g'>
            <Detail price={price} />
          </Box>
          <Box width={[1, 1, 1, 1/2]} px={0} className='b'>
            <Reviews />
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default App;
