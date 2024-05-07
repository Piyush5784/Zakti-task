import { memo } from "react";
import "./App.css";
import Products from "./components/Products";
import { Toaster } from "react-hot-toast";
import { useFunctionsContext } from "./Context/DataContext";
import Carts from "./components/Carts";

function App() {
  const { setProductsName, setQuantity, setPrice, addProduct } =
    useFunctionsContext();

  return (
    <>
      <div className="flex gap-7">
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
              onClick={(e) => addProduct(e)}
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
      <div className="ml-[280px]">
        <p className="pl-7 font-bold">Cart List</p>

        <Carts />
      </div>
    </>
  );
}

export default memo(App);
