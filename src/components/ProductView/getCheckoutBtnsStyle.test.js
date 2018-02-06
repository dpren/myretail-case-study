import getCheckoutBtnsStyle from './getCheckoutBtnsStyle.js';


test('getCheckoutBtnsStyle returns the correct styles', () => {
  expect(getCheckoutBtnsStyle("0"))
    .toMatchObject({
      addToCart: {},
      pickUpInStore: {},
    });

  expect(getCheckoutBtnsStyle("1"))
    .toMatchObject({
      addToCart: {},
      pickUpInStore: {display: 'none'},
    });

  expect(getCheckoutBtnsStyle("2"))
    .toMatchObject({
      addToCart: {display: 'none'},
      pickUpInStore: {},
    });
});
