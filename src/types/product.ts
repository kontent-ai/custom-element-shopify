export type Product = Readonly<{
  id: string;
  title: string;
  previewUrl?: string;
  sku?: string;
  handle: string;
}>;
