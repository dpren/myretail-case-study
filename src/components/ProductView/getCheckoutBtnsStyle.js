/**
 * show btns depending on product being available online / in store
 *
 * @func getCheckoutBtnsStyle
 * @param {String} channelCode
 * @return {Object}
 */
export default (channelCode) => {
  if (channelCode === "0") {
    return {
      addToCart: {},
      pickUpInStore: {},
    };
  } else if (channelCode === "1") {
    return {
      addToCart: {},
      pickUpInStore: {display: 'none'},
    };
  } else if (channelCode === "2") {
    return {
      addToCart: {display: 'none'},
      pickUpInStore: {},
    };
  } else {
    console.error('Invalid purchasingChannelCode', channelCode);
    return {
      addToCart: {display: 'none'},
      pickUpInStore: {display: 'none'},
    };
  }
};
