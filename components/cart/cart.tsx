import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const { products } = useSelector((state: any) => state.ProductReducers);

  return (
    <>
      <section
        tabIndex={0}
        className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
        <div className="card-body">
          {products.map((product: any) => (
            <div
              className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
              key={product.title + product.id}>
              {product.title}
            </div>
          ))}
          {/* <div className="divider" />
          <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
            2
          </div>
          <div className="divider" />
          <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
            3
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Cart;
