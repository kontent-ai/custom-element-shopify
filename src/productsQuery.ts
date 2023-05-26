export const createProductsQuery = (searchString: string) =>
  `{
        products(first: 10, query: "title:${searchString}*") {
          edges {
            node {
              id
              handle
              title
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
              variants(first: 1) {
                  edges {
                      node {
                          sku
                      }
                  }
              }
            }
          }
      }`;

export type ProductsQueryResponse = Readonly<{
  products: Readonly<{
    edges: ReadonlyArray<
      Readonly<{
        node: Readonly<{
          id: string;
          handle: string;
          title: string;
          images: Readonly<{
            edges: ReadonlyArray<
              Readonly<{
                node: Readonly<{ originalSrc: string }>; // or url?
              }>
            >;
          }>;
          variants: Readonly<{
            edges: ReadonlyArray<
              Readonly<{
                node: Readonly<{ sku?: string }>;
              }>
            >;
          }>;
        }>;
      }>
    >;
  }>;
}>;
