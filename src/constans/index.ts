export const routes = {
  product: "/:id",
};

const API = "http://localhost:5000";

export const apiRoutes = {
  getProduct: `${API}/products/get?id=`,
  getProducts: `${API}/products/getAll`,
  createProduct: `${API}/products/create`,
  deleteProduct: `${API}/products/delete`,
  createMultiple: `${API}/products/createMultiple`,
  getProductsByBatch: `${API}/products/getByBatch`,
};
