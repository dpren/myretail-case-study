import React from 'react';
import { Flex, Box } from 'grid-styled';
import { format } from 'date-fns';
import './ProductView.css';


const formatDate = d =>
  format(new Date(d), 'MMMM D, YYYY');

const calculateStars = (rating) => (
  <span style={{color: '#CB0000'}}>
    {Array(Number(rating)).fill('★').join('')}
    <span style={{color: '#888888'}}>
      {Array(5 - Number(rating)).fill('★').join('')}
    </span>
  </span>
)

export default ({reviews}) => {
  const pro = reviews.Pro[0];
  const con = reviews.Con[0];

  return (
    <div>
      <Flex p={2} className='top-row'>
        <Box width={1/2}>
          <div className='bold'>
            <span className='overall-stars'>{calculateStars(4)}</span> overall
          </div>
        </Box>
        <Box width={1/2} style={{textAlign: 'right'}}>
          <a href='' className='bold'>view all {reviews.totalReviews} reviews</a>
        </Box>
      </Flex>

      <Box p={2} className='grey-box'>
        <Flex pb={2} style={{borderBottom: '1px solid lightgrey'}}>
          <Box width={1/2}>
            <div className="txt h3">PRO</div>
            <small>most helpful 4-5 star review</small>
          </Box>
          <Box width={1/2}>
            <div className="txt h3">CON</div>
            <small>most helpful 1-2 star review</small>
          </Box>
        </Flex>
        <Flex pt={2}>
          {proConReview(pro)}
          {proConReview(con)}
        </Flex>
      </Box>
    </div>
  );
}

const proConReview = (rev) => (
  <Box width={1/2} pr={3}>
    <Box pb={2}>{calculateStars(rev.overallRating)}</Box>
    <Box pb={1} className='h3 bold'>{rev.title}</Box>
    <Box pb={1} className='txt'>{rev.review}</Box>
    <Box pb={1} className='txt'>
      <a href=''>{rev.screenName}</a> {formatDate(rev.datePosted)}
    </Box>
  </Box>
)
