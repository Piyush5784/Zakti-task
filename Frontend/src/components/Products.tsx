import { useRecoilStateLoadable } from "recoil";
import { allProductsAtom } from "../Atoms";
import { memo } from "react";
import { ProductProp, useFunctionsContext } from "../Context/DataContext";

const Products = () => {
  const [allProducts] = useRecoilStateLoadable(allProductsAtom);
  const { addToCart } = useFunctionsContext();

  if (allProducts.state == "hasValue") {
    return (
      <>
        <div className="flex flex-wrap">
          {allProducts.contents.products.map((item: ProductProp) => (
            <>
              <div className="border rounded-xl m-5 w-[40%] md:w-[30%] lg:w-[20%]">
                <p className="p-3"> Product name : {item.Name}</p>
                <p className="p-3">Price : ${Number(item?.Price)}</p>
                <p className="p-3">Quantity : {Number(item.Quantity)}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-2 bg-black text-white rounded-xl ml-3 mb-3"
                >
                  Add to Cart
                </button>
              </div>
            </>
          ))}
        </div>
      </>
    );
  } else if (allProducts.state == "hasError") {
    return <div className="pl-7">Backend Down</div>;
  } else if (allProducts.state == "loading") {
    return <div className="pl-7">Loading</div>;
  }
};

export default memo(Products);
