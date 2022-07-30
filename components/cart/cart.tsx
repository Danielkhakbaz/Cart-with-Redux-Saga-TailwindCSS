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
      <section className="dropdown-content card card-compact w-80 bg-gray-500 text-primary-content shadow p-2">
        <div className="card-body">
          {addedProducts?.length > 0 ? (
            addedProducts.map((product: Product, index: number) => (
              <section key={product.title + product.id}>
                <div className="card card-side bg-gray-300 flex flex-row justify-center items-center shadow-xl">
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
                      <span className="font-bold text-slate-600 mx-3">
                        {product.quantity}
                      </span>
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
