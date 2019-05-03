import React, { Fragment } from 'react';

import SideMenu from '../layout/SideMenu';
import Slider from '../layout/Slider';
import OnSale from '../layout/OnSale';
import Featured from '../layout/Featured';
import Products from '../layout/Products';
import SiteFeatures from '../layout/SiteFeatures';

function Layout() {
  return (
    <Fragment>
      <SideMenu category="rap" />
      <Slider />
      <Featured />
      <OnSale />
      <Products />
      <SiteFeatures />
    </Fragment>
  );
}

export default Layout;
