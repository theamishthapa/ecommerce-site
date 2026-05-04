import CheckmarkIcon from "../../assets/images/icons/checkmark.png";
import { Product } from "./Product";

export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="products-grid">
      {products.length === 0 ? (
        <h2 className="not-found-text">No products found</h2>
      ) : (
        products.map((product) => {
          return (
            <Product key={product.id} product={product} loadCart={loadCart} />
          );
        })
      )}
    </div>
  );
}
