import { ReactNode, createContext, useContext } from "react";
import { backendUrl } from "../config";
import axios from "axios";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Product_Name, Quantity, price_atom } from "../Atoms";
import toast from "react-hot-toast";

type FunctionContextProp = {
  decreaseProductQuantity: (
    productId: string,
    Quantity: number
  ) => Promise<void>;
  increaseProductQuantity: (
    productId: string,
    Quantity: number
  ) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  productsName: string;
  setProductsName: SetterOrUpdater<string>;
  setQuantity: SetterOrUpdater<number>;
  setPrice: SetterOrUpdater<number>;
  quantity: number;
  price: number;
  addProduct: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<string | undefined>;
};

const FunctionContext = createContext({} as FunctionContextProp);

export const useFunctionsContext = () => {
  return useContext(FunctionContext);
};

export function FunctionContextProvider({ children }: { children: ReactNode }) {
  const [productsName, setProductsName] = useRecoilState(Product_Name);

  const [quantity, setQuantity] = useRecoilState(Quantity);

  const [price, setPrice] = useRecoilState(price_atom);

  async function addProduct(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (productsName == "" || price == 0 || quantity == 0) {
      return toast.error("Please fill all inputs");
    }

    const res = await axios.post(`${backendUrl}/api/AddProduct`, {
      Name: productsName,
      Quantity: quantity,
      Price: price,
    });
    if (res.data.message) {
      window.location.reload();
    }
  }
  async function increaseProductQuantity(productId: string, Quantity: number) {
    let newQuantity = Quantity + 1;
    await axios.post(`${backendUrl}/api/updateQuantity`, {
      productId,
      Quantity: newQuantity,
    });
    window.location.reload();
  }
  async function decreaseProductQuantity(productId: string, Quantity: number) {
    let newQuantity = Quantity - 1;
    await axios.post(`${backendUrl}/api/updateQuantity`, {
      productId,
      Quantity: newQuantity,
    });
    window.location.reload();
  }

  async function deleteProduct(productId: string) {
    await axios.post(`${backendUrl}/api/deleteProduct`, {
      productId,
    });
    window.location.reload();
  }
  return (
    <FunctionContext.Provider
      value={{
        decreaseProductQuantity,
        increaseProductQuantity,
        deleteProduct,
        productsName,
        setProductsName,
        setQuantity,
        setPrice,
        addProduct,
        quantity,
        price,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
}
