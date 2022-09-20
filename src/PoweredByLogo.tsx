import shopifyLogo from './images/shopify_logo.svg'
import { FC } from "react";

export const PoweredByLogo: FC = () => (
  <div style={{ float: 'right', padding: 10 }}>
    <span style={{ paddingRight: 5 }}>powered by</span>
    <img
      height={40}
      src={shopifyLogo}
      alt="Shopify logo"
      title="Shopify logo"
    />
  </div>
);

PoweredByLogo.displayName = 'PoweredByLogo';
