export type Product = {
  id: number;
  title: string;
  image: string;
  quantity: number;
};

export type Products = {
  products: Array<Product>;
};
