import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { EnsureKontentAsParent } from "./EnsureKontentAsParent";
import { ShopifyProductSelector } from "./ShopifyProductSelector";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EnsureKontentAsParent>
      <ShopifyProductSelector />
    </EnsureKontentAsParent>
  </React.StrictMode>
);
