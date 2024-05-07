import { useRecoilValueLoadable } from "recoil";
import { allCartsListAtom } from "../Atoms";
import { ProductProp, useFunctionsContext } from "../Context/DataContext";
import axios from "axios";
import { backendUrl } from "../config";

const Carts = () => {
  const cartsItems = useRecoilValueLoadable(allCartsListAtom);

  const { deleteFromCart } = useFunctionsContext();
  if (cartsItems.state == "hasValue") {
    async function increaseQuantity(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      Id: string,
      Quantity: number
    ) {
      e.preventDefault();
      try {
        await axios.post(`${backendUrl}/api/cart/updateCartQuantity`, {
          productId: Id,
          Quantity: Quantity + 1,
        });
        window.location.reload();
      } catch (error) {}
    }
    async function decreaseQuantity(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      Id: string,
      Quantity: number
    ) {
      e.preventDefault();
      try {
        await axios.post(`${backendUrl}/api/cart/updateCartQuantity`, {
          productId: Id,
          Quantity: Quantity - 1,
        });
        window.location.reload();
      } catch (error) {}
    }
    return (
      <>
        <div className="flex flex-wrap">
          {cartsItems.contents.carts.map((item: ProductProp) => (
            <>
              <div className="border rounded-xl m-5 w-[40%] md:w-[30%] lg:w-[20%]">
                <p className="p-3"> Product name : {item.Name}</p>
                <p className="p-3">Price : ${Number(item?.Price)}</p>
                <div className="flex items-center">
                  <div>
                    <button
                      onClick={(e) =>
                        increaseQuantity(e, item._id, Number(item.Quantity))
                      }
                      className="p-1 bg-black text-white rounded-xl ml-3"
                    >
                      +
                    </button>
                  </div>

                  <p className="p-3">Quantity : {Number(item.Quantity)}</p>
                  <div>
                    <button
                      onClick={(e) =>
                        decreaseQuantity(e, item._id, Number(item.Quantity))
                      }
                      className="p-2 bg-black text-white rounded-xl"
                    >
                      -
                    </button>
                  </div>
                </div>
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
  return <div className="pl-7">Backend Down</div>;
};

export default Carts;
