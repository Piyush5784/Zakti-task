import axios from "axios";
import toast from "react-hot-toast";
import { backendUrl } from "./config";

export type ProductProp = {
  _id: string;
  Name: string;
  Quantity: Number;
  Price: Number;
};

export async function addProduct(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  productsName: string,
  price: Number,
  quantity: Number
) {
  e.preventDefault();
  if (productsName == "" || price == 0 || quantity == 0) {
    return toast.error("Please fill all inputs");
  }

  const res = await axios.post(`${backendUrl}/api/product/AddProduct`, {
    Name: productsName,
    Quantity: quantity,
    Price: price,
  });
  if (res.data.message) {
    toast.success("Product added");
  }
}
export async function increaseProductQuantity(
  productId: string,
  Quantity: number
) {
  let newQuantity = Quantity + 1;
  await axios.post(`${backendUrl}/api/updateQuantity`, {
    productId,
    Quantity: newQuantity,
  });
}
export async function decreaseProductQuantity(
  productId: string,
  Quantity: number
) {
  let newQuantity = Quantity - 1;
  await axios.post(`${backendUrl}/api/updateQuantity`, {
    productId,
    Quantity: newQuantity,
  });
}
export async function deleteFromCart(item: ProductProp) {
  try {
    await axios.post(`${backendUrl}/api/cart/deleteFromCart`, {
      CartId: item._id,
    });

    toast.success("Item Deleted");
  } catch (error) {
    toast.error("Error deleting item");
  }
}
export async function deleteProduct(productId: string) {
  await axios.post(`${backendUrl}/api/product/deleteProduct`, {
    productId,
  });
  toast.success("Product deleted");
}
export async function addToCart(Item: ProductProp) {
  try {
    await axios.post(`${backendUrl}/api/cart/addToCart`, {
      productName: Item.Name,
      Price: Item.Price,
      Quantity: 1,
      CartId: Item._id,
    });

    toast.success("Product Add to Cart");
  } catch (error) {
    toast.error("Error Adding in cart");
  }
}

export async function increaseQuantity(
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
  } catch (error) {}
}
export async function decreaseQuantity(
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
  } catch (error) {}
}
