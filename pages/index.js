import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import HeroBannerSecondary from '../components/HeroBannerSecondary';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
    <div className="secondary-banner-container">
      <HeroBannerSecondary id='first' heroBanner={bannerData.length && bannerData[0]} />
      <HeroBannerSecondary heroBanner={bannerData.length && bannerData[2]} />
    </div>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      {/* <p>some of the </p> */}
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
