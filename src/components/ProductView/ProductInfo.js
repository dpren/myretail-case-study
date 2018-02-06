import React from 'react';
import { Flex, Box } from 'grid-styled';
import './ProductView.css';


const circleSvg = (txt) => (
  <svg height='30' width='30' style={{marginBottom:-10}}>
    <circle cx='15' cy='15' r="15" fill='#CCC' />
    <text x='50%' y='50%' textAnchor='middle' fill='#FFF' dy='.28em' fontSize='30'>
      {txt}
    </text>
  </svg>
);

export default (props) => {
  return (
    <div>
      <Box pb={3}>
        <span className='price'>{props.price} </span><small> online price</small>
      </Box>
      <Box pb={3}>
        <Box py={2} className='promotions'>
          <ul>
            {props.promotions.map((promo, index) => (
              <li key={index}>{promo}</li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box pb={3}>
        <div className='quantity'>
          <span className='txt quantity-left'>quantity:</span>
          <span className='quantity-right'>
            <button className='btn-reset' onClick={props.changeQuantityHandler(-1)}>
              {circleSvg('-')}
            </button>
            <span className='quantity-number'>{props.orderQuantity}</span>
            <button className='btn-reset' onClick={props.changeQuantityHandler(1)}>
              {circleSvg('+')}
            </button>
          </span>
        </div>
      </Box>
      <Flex pb={3}>
        <Box width={1/2} mr={2} style={props.checkoutBtnsStyle.pickUpInStore}>
          <button className='big-btn big-btn-black'>Pick up in store</button>
          <div className='txt find-in-a-store'><a href=''>find in a store</a></div>
        </Box>
        <Box width={1/2} style={props.checkoutBtnsStyle.addToCart}>
          <button className='big-btn big-btn-red'>Add to cart</button>
        </Box>
      </Flex>
      <Flex pb={3}>
        <Box width={75} pr={15} className='returns'>returns</Box>
        <Box width={1} pl={15} className='return-policy'>{props.returnPolicy}</Box>
      </Flex>
      <Flex pb={3}>
        <Box width={[2/5, 1/3]} className='register-list-share-btn'>Add to registry</Box>
        <Box width={1/3} mx={1} className='register-list-share-btn'>Add to list</Box>
        <Box width={1/3} className='register-list-share-btn'>Share</Box>
      </Flex>
      <Box pb={3}>
        <h2 className='h1'>product highlights</h2>
      </Box>
      <Box>
        <ul className='txt product-highlights-list'>
          {props.productHighlights.map((promo, index) => (
            <li key={index}>{promo}</li>
          ))}
        </ul>
      </Box>
    </div>
  );
}
