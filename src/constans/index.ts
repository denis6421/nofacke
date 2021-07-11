import { PRODUCT_TYPES } from "./../screens/Product/interfaces/index";
export const routes = {
  product: "/:id",
};

const API = "https://nofacke-server.herokuapp.com";

export const apiRoutes = {
  getProduct: `${API}/products/get?id=`,
  getProducts: `${API}/products/getAll`,
  createProduct: `${API}/products/create`,
  deleteProduct: `${API}/products/delete`,
  createMultiple: `${API}/products/createMultiple`,
  getProductsByBatch: `${API}/products/getByBatch`,
};

export const models = {
  [PRODUCT_TYPES.JEANS]: "",
  [PRODUCT_TYPES.SHOES]: "",
  [PRODUCT_TYPES.WATCH]: "",
};
