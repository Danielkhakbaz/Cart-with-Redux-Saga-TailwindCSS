import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { ProductActions } from "../../providers/product/product-actions";

const Cart: React.FC = () => {
  const { products } = useSelector((state: any) => state.ProductReducers);
  const dispatch = useDispatch();

  const nonZeroProducts = products.filter(
    (product: any) => product.quantity !== 0
  );

  return (
    <>
      <section
        tabIndex={0}
        className="dropdown-content card card-compact w-80 p-2 shadow bg-primary text-primary-content">
        <div className="card-body">
          {nonZeroProducts.length > 0 ? (
            nonZeroProducts.map((product: any) => (
              <>
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
                    <div className="card-actions justify-end items-center">
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
                <div className="divider" />
              </>
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
