[![Core integration][core-shield]](https://kontent.ai/integrations/shopify)

![Last modified][last-commit]
[![Issues][issues-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![MIT License][license-shield]][license-url]

[![Stack Overflow][stack-shield]](https://stackoverflow.com/tags/kontent-ai)
[![Discord][discord-shield]](https://discord.gg/SKCxwPtevJ)

<p align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/kai-logo-hor-neg-rgb.svg">
  <img alt="Kontent.ai logo for dark/light scheme." src="docs/kai-logo-hor-pos-rgb.svg" width="300">
</picture>
<image src="docs/shopify-logo.png" alt="shopify logo" width="200">
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#quick-deploy">Deploy</a> •
  <a href="#configuring-the-custom-element">Configuration</a> •
  <a href="#what-is-saved">Saved value</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a> •
  <a href="#additional-resources">Resources</a>
</p>

This [custom element](https://kontent.ai/learn/tutorials/develop-apps/integrate/content-editing-extensions) allows the user to search and link products from their [Shopify](https://shopify.com/) store into [Kontent.ai](https://kontent.ai).

## Features

- Editors can
  - Search for products in Shopify e-commerce platform
  - Select a single or multiple products (or one of its variants)
  

## Demo

![Demo Animation][product-demo]

## Getting started

### Quick Deploy

Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your account as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kontent-ai/custom-element-shopify)

### Running manually

You will need to [deploy](https://docs.netlify.com/functions/deploy/?fn-language=ts) the [Netlify function](https://docs.netlify.com/functions/overview/) in the `src/functions` directory.
Or [run it locally](https://docs.netlify.com/functions/build/#test-locally).

The integration's custom element is created with [Create React App](https://create-react-app.dev/). First you will need to install npm dependencies with `npm install`. Then use `npm run build` to build the integration or `npm run start` to start a local development server. See https://create-react-app.dev/docs/available-scripts for more scripts.

## Shopify configuration
In order to use this extension, you'll need to create a [Custom App](https://help.shopify.com/en/manual/apps/custom-apps) in your Shopify store.
This allows the integration to connect into your product catalog through the [Storefront API](https://shopify.dev/docs/storefront-api) to search for products.
You can follow the official tutorial to install a custom app [here](https://help.shopify.com/en/manual/apps/custom-apps).

Remember to enable read access to product listings during the [Select API Scopes](https://help.shopify.com/en/manual/apps/custom-apps#select-api-scopes) part.

After the installation is complete, [get the Storefront API access token](https://help.shopify.com/en/manual/apps/custom-apps#get-the-api-credentials-for-a-custom-app) as you will need it to configure the custom element in Kontent.ai.

## Configuring the Custom Element
You will need to provide the following JSON parameters for the custom element to connect to your store.

- **storeFrontAccessToken** - Use the token from the Shopify configuration above.
- **apiDomain** - This is shown in your browser's address bar when configuring Shopify, in our case it is https://dancing-goat-sample.myshopify.com, with _dancing-goat-sample_ being the name of the store.

```json
{
  "storeFrontAccessToken": "<YOUR STOREFRONT ACCESS TOKEN>",
  "apiDomain": "<YOUR STORE NAME>.myshopify.com",
  "isMultiSelect": false
}
```
Note that **isMultiSelect** is optional, if not provided, it will be considered as the value shown above.

## What is Saved
The selector stores the following value format in JSON, which it also uses to display the selected product on first load:

```json
{
  "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE3MzQ0NjA2MzcyMTg=",
  "handle": "aeropress",
  "title": "AeroPress",
  "previewUrl": "https://cdn.shopify.com/s/files/1/0048/8679/0178/products/aeropress.jpg?v=1551277741",
  "sku": "BR-01"
}
```
The fields are:

- **id** – The internal ID of the product in Shopify; can be used for further API calls to get product data.
- **handle** – A similar value to a URL Slug in Kontent.ai; it's used within the product URL.
- **title** – The name of the product.
- **previewUrl** – The primary (featured) image for the product.
- **sku** – The SKU for the product; taken from the first product variant.

You can use any of those values for both admin UI or in your project. Should you need to make more fields available, you can do so by customizing the code of the custom element.

## Contributors

<a href="https://github.com/kontent-ai/custom-element-shopify/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kontent-ai/custom-element-shopify" />
</a>

We have collected notes on how to contribute to this project in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Additional Resources

- [Kontent.ai Integration documentation](https://kontent.ai/learn/tutorials/develop-apps/integrate/integrations-overview)
- [Custom Element documentation](https://kontent.ai/learn/tutorials/develop-apps/integrate/content-editing-extensions)
- [Custom Element API reference](https://kontent.ai/learn/reference/custom-elements-js-api)


[last-commit]: https://img.shields.io/github/last-commit/kontent-ai/custom-element-shopify?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/kontent-ai/custom-element-shopify.svg?style=for-the-badge
[contributors-url]: https://github.com/kontent-ai/custom-element-shopify/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kontent-ai/custom-element-shopify.svg?style=for-the-badge
[forks-url]: https://github.com/kontent-ai/custom-element-shopify/network/members
[stars-shield]: https://img.shields.io/github/stars/kontent-ai/custom-element-shopify.svg?style=for-the-badge
[stars-url]: https://github.com/kontent-ai/custom-element-shopify/stargazers
[issues-shield]: https://img.shields.io/github/issues/kontent-ai/custom-element-shopify.svg?style=for-the-badge
[issues-url]: https://github.com/kontent-ai/custom-element-shopify/issues
[license-shield]: https://img.shields.io/github/license/kontent-ai/custom-element-shopify.svg?style=for-the-badge
[license-url]: https://github.com/kontent-ai/custom-element-shopify/blob/main/LICENSE
[core-shield]: https://img.shields.io/static/v1?label=&message=core%20integration&style=for-the-badge&color=FF5733
[stack-shield]: https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white&style=for-the-badge
[discussion-shield]: https://img.shields.io/badge/GitHub-Discussions-FE7A16.svg?logo=github&style=for-the-badge
[discord-shield]: https://img.shields.io/discord/821885171984891914?label=Discord&logo=Discord&logoColor=white&style=for-the-badge
[product-demo]: docs/demo.gif?raw=true
