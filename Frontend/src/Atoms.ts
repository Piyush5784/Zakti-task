import axios from "axios";
import { atom, atomFamily, selector } from "recoil";
import { backendUrl } from "./config";

export const allProductsAtom = atom({
  key: "ProductsAtom",
  default: selector({
    key: "ItemsSelector",
    get: async () => {
      const res = await axios.get(`${backendUrl}/api/getAllProducts`);
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
