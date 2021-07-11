export interface IProduct {
  name: string;
  country: string;
  _id?: string;
  type: string;
  batch: string;
  brand: string;
}

export enum PRODUCT_TYPES {
  SHOES = "shoes",
  JEANS = "jeans",
  WATCH = "watch",
}
