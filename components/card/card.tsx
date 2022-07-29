import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductActions } from "../../providers/product/product-actions";
import { Product } from "../../types/product";

type Props = {
  product: Product;
};

const Card: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            className="rounded-xl"
            src={product.image}
            width={304}
            height={171}
            layout="fixed"
            priority
            alt="Image of Products"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <div className="card-actions flex justify-center items-center my-2">
            <button
              className="btn btn-error text-white"
              onClick={() =>
                dispatch({ type: ProductActions.DECREMENT, payload: product })
              }
              disabled={product.quantity === 0}>
              -
            </button>
            <p className="font-bold mx-2">{String(product.quantity)}</p>
            <button
              className="btn btn-success text-white"
              onClick={() =>
                dispatch({ type: ProductActions.INCREMENT, payload: product })
              }>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
