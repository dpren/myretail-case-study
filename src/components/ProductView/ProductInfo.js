import React from 'react';
import './ProductView.css';

export default (props) => {
  return (
    <div>
      <div>detail</div>
      <div className='price'>{props.price}</div>
    </div>
  );
}
