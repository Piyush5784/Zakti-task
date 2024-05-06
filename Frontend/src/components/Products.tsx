import { useRecoilStateLoadable } from "recoil";
import { allProductsAtom } from "../Atoms";
import { memo } from "react";
import { useFunctionsContext } from "../Context/DataContext";

type ProductProp = {
  _id: string;
  Name: string;
  Quantity: Number;
  Price: Number;
};

const Products = () => {
  const [allProducts] = useRecoilStateLoadable(allProductsAtom);

  if (allProducts.state == "hasValue") {
    const { decreaseProductQuantity, increaseProductQuantity, deleteProduct } =
      useFunctionsContext();

    return (
      <>
        <div className="flex flex-wrap">
          {allProducts.contents.products.map((item: ProductProp) => (
            <>
              <div className="border rounded-xl m-5 w-[40%] md:w-[30%] lg:w-[20%]">
                <p className="p-3"> Product name : {item.Name}</p>
                <p className="p-3">Price : ${Number(item?.Price)}</p>

                <p className="p-3">
                  Quantity :{" "}
                  <button
                    onClick={() =>
                      increaseProductQuantity(item._id, Number(item.Quantity))
                    }
                    className="px-2 rounded m-1 py-1 bg-black text-white"
                  >
                    +
                  </button>
                  {Number(item.Quantity)}
                  {Number(item.Quantity) > 1 ? (
                    <button
                      onClick={() =>
                        decreaseProductQuantity(item._id, Number(item.Quantity))
                      }
                      className="px-2 rounded m-1 py-1 bg-black text-white"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => deleteProduct(item._id)}
                      className="px-2 rounded m-1 py-1 bg-black text-white"
                    >
                      delete
                    </button>
                  )}
                </p>
              </div>
            </>
          ))}
        </div>
      </>
    );
  } else if (allProducts.state == "hasError") {
    return <div>Backend Down</div>;
  } else if (allProducts.state == "loading") {
    return <div>Loading</div>;
  }
};

export default memo(Products);
