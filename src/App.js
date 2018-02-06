import React from 'react';
import { Flex, Box } from 'grid-styled'

import './App.css';
import product from './mock-ajax-response';
import ImageCarousel from './components/ProductView/ImageCarousel';
import ProductInfo from './components/ProductView/ProductInfo';
import Reviews from './components/ProductView/Reviews';
import getCheckoutBtnsStyle from './components/ProductView/getCheckoutBtnsStyle';


const checkoutBtnsStyle = getCheckoutBtnsStyle(product.purchasingChannelCode);

const changeQuantity = (amount) => (state) => ({
  orderQuantity: Math.max(0, state.orderQuantity + amount)
});

export default class App extends React.Component {
  state = {
    orderQuantity: 1
  }

  changeQuantityHandler = (amount) => () => {
    this.setState(changeQuantity(amount));
  }

  render() {
    return (
      <div className='mock-padding'>
        <div className='main-content'>
          <Flex wrap px={[2, 3, 3, 4]}>
            <Box width={[1, 1, 1/2]} p={3} pr={[0, 0, 2]} className='title-carousel-container'>
              <h1 className='h1 title'>{product.title}</h1>
              <ImageCarousel images={product.carouselImages} />
            </Box>
            <Box width={[1, 1, 1/2]} pt={3} pl={[0, 0, 2]} pb={[3, 3, 0]}>
              <ProductInfo
                price={product.price}
                promotions={product.promotions}
                returnPolicy={product.returnPolicy}
                productHighlights={product.productHighlights}
                checkoutBtnsStyle={checkoutBtnsStyle}
                orderQuantity={this.state.orderQuantity}
                changeQuantityHandler={this.changeQuantityHandler}
              />
            </Box>
            <Box width={[1, 1, 1/2]} px={0} pr={[0, 0, 2]}>
              <Reviews reviews={product.reviews} />
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}
