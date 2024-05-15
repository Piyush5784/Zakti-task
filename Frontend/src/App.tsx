import { memo } from "react";
import "./App.css";
import Products from "./components/Products";
import { Toaster } from "react-hot-toast";
import Carts from "./components/Carts";
import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { Product_Name, Quantity, allProductsAtom, price_atom } from "./Atoms";
import { addProduct } from "./Function";

function App() {
  const [productsName, setProductsName] = useRecoilState(Product_Name);
  const [quantity, setQuantity] = useRecoilState(Quantity);
  const [price, setPrice] = useRecoilState(price_atom);
  const refresh = useRecoilRefresher_UNSTABLE(allProductsAtom);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-7">
        <Toaster />

        <div className="">
          <form className="max-w-sm mx-auto rounded-md float-left border p-2 m-7 border-black ml-5">
            <div className="mb-5">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                onChange={(e) => setProductsName(e.target.value)}
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="Number"
                id="base-input"
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="Number"
                id="base-input"
                onChange={(e) => setPrice(Number(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <button
              onClick={async (e) => {
                await addProduct(e, productsName, price, quantity);
                refresh();
              }}
              className="bg-black text-white rounded-lg px-3 py-2"
            >
              Add Product
            </button>
          </form>{" "}
        </div>
        <div>
          <p className="font-bold pl-7">Product List</p>
          <Products />
        </div>

        <hr />
      </div>
      <div className="md:ml-[280px]">
        <p className="pl-7 font-bold">Cart List</p>

        <Carts />
      </div>
    </>
  );
}

export default memo(App);
