import { CatalogEntryView } from './item-data.json';


const tail = x => x.splice(1, x.length);
const parseStrong = (htmlStr) =>
  tail(
    htmlStr.join()
      .split('<strong>')
      .map(x => x.split('</strong>').join())
  );



const catalogEntry = CatalogEntryView[0];

const images = catalogEntry.Images[0];
const primaryImage = images.PrimaryImage[0].image;
const alternateImages = images.AlternateImages.map(x => x.image);
const carouselImages = [primaryImage].concat(alternateImages);

const title = catalogEntry.title;

const price = catalogEntry.Offers[0].OfferPrice[0].formattedPriceValue;

const promotions = catalogEntry.Promotions.map(x => x.Description[0].shortDescription);

// const returnPolicy = catalogEntry.ReturnPolicy[0].legalCopy;
const returnPolicy = "This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.";

const productHighlightsHtml = catalogEntry.ItemDescription[0].features;
const productHighlights = parseStrong(productHighlightsHtml);

const purchasingChannelCode = catalogEntry.purchasingChannelCode;

const reviews = catalogEntry.CustomerReview[0];



export default {
  title,
  carouselImages,
  price,
  promotions,
  returnPolicy,
  productHighlights,
  purchasingChannelCode,
  reviews,
}
