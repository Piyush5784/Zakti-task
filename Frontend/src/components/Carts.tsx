import { useRecoilValueLoadable } from "recoil";
import { allCartsListAtom } from "../Atoms";
import { ProductProp, useFunctionsContext } from "../Context/DataContext";

const Carts = () => {
  const cartsItems = useRecoilValueLoadable(allCartsListAtom);

  const { deleteFromCart } = useFunctionsContext();
  if (cartsItems.state == "hasValue") {
    return (
      <>
        <div className="flex flex-wrap">
          {cartsItems.contents.carts.map((item: ProductProp) => (
            <>
              <div className="border rounded-xl m-5 w-[40%] md:w-[30%] lg:w-[20%]">
                <p className="p-3"> Product name : {item.Name}</p>
                <p className="p-3">Price : ${Number(item?.Price)}</p>
                <p className="p-3">Quantity : {Number(item.Quantity)}</p>

                <button
                  onClick={() => deleteFromCart(item)}
                  className="px-3 py-2 bg-black text-white rounded-xl ml-3"
                >
                  Delete
                </button>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
  return <div>Backend Down</div>;
};

export default Carts;
