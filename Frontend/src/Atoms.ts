import axios from "axios";
import { atom, atomFamily, selector } from "recoil";
import { backendUrl } from "./config";

export const allProductsAtom = atom({
  key: "ProductsAtom",
  default: selector({
    key: "ItemsSelector",
    get: async () => {
      const res = await axios.get(`${backendUrl}/api/product/getAllProducts`);
      return res.data;
    },
  }),
});

export const allCartsListAtom = atom({
  key: "CartsListAtom",
  default: selector({
    key: "cartItemsSelector",
    get: async () => {
      const res = await axios.get(`${backendUrl}/api/cart/getAllCarts`);
      return res.data;
    },
  }),
});

export const Product_Name = atom({
  key: "ProductsName",
  default: "",
});

export const Quantity = atom({
  key: "quantityAtom",
  default: 1,
});

export const price_atom = atom({
  key: "PriceAtom",
  default: 0,
});

export const quantity_Atom = atomFamily({
  key: "quantityAtom",
  default: (param: number) => param,
});
