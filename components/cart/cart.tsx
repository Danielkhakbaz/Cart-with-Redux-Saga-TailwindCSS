import { useDispatch } from "react-redux";
import Image from "next/image";
import { ProductActions } from "../../providers/product/product-actions";
import { useAddedProducts } from "../../hooks/useAddedProducts";
import { Product } from "../../types/product";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const addedProducts = useAddedProducts();

  const handleTheDivider = (index: number) => {
    if (addedProducts[index + 1] !== undefined) {
      return true;
    }
    return false;
  };

  return (
    <>
      <section className="dropdown-content card card-compact w-80 bg-primary text-primary-content shadow p-2">
        <div className="card-body">
          {addedProducts.length > 0 ? (
            addedProducts.map((product: Product, index) => (
              <section key={product.title + product.id}>
                <div className="card card-side shadow-xl">
                  <figure>
                    <Image
                      src={`/assets/Image-No-${product.id}.jpg`}
                      width={100}
                      height={100}
                      layout="fixed"
                      priority
                      alt="Image of Products"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions items-center justify-end">
                      <button
                        className="btn btn-error text-white"
                        onClick={() =>
                          dispatch({
                            type: ProductActions.DECREMENT,
                            payload: product,
                          })
                        }
                        disabled={product.quantity === 0}>
                        -
                      </button>
                      <p className="font-bold mx-2">
                        {String(product.quantity)}
                      </p>
                      <button
                        className="btn btn-success text-white"
                        onClick={() =>
                          dispatch({
                            type: ProductActions.INCREMENT,
                            payload: product,
                          })
                        }>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {handleTheDivider(index) && <div className="divider" />}
              </section>
            ))
          ) : (
            <p className="text-lg font-bold text-center">The cart is Empty!</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
