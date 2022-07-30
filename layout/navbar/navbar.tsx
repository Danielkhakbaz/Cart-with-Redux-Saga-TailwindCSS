import Cart from "../../components/cart/cart";
import { useAddedProducts } from "../../hooks/useAddedProducts";

const Navbar: React.FC = () => {
  const addedProducts = useAddedProducts();

  return (
    <>
      <nav className="navbar bg-gray-800">
        <div className="container mx-auto">
          <div className="flex-1">
            <p className="normal-case text-xl text-white">Cart</p>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle text-white">
                <div className="indicator">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {addedProducts.length}
                  </span>
                </div>
              </label>
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
