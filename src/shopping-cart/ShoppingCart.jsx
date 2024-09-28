import { React, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { GetAllProducts } from "./utils/GetAllProducts";
import ShoppingCartHeader from "./ShoppingCartHeader";
const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartItems, setShowCartItems] = useState(false)
  useEffect(() => {
  const itemsIncart = JSON.parse(localStorage.getItem("cart"))  
  if(itemsIncart){
    setCartItems([...itemsIncart])
  }

  }, [])
  
  useEffect(() => {
    if(cartItems.length){

      localStorage.setItem("cart" , JSON.stringify(cartItems))
    }
  }, [cartItems]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const products = await GetAllProducts();
    setProducts([...products]);
    console.log(products);
  };
  const addCartItem = (item) => {
    const items = [...cartItems];
    const itemInd = items.findIndex((data) => data.id === item.id);

    if (itemInd == -1) {
      items.push(item);
      setCartItems([...items]);
    }
  };
  return (
    <div className="container mx-auto my-auto ">
      <ShoppingCartHeader cartItems={cartItems} setShowCartItems={setShowCartItems}  />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data) => {
              const isAddedToCart =
                cartItems.findIndex((product) => product.id === data.id) !== -1;
              return (
                <CartCard
                  addToCart={() => addCartItem(data)}
                  key={data.id}
                  item={data}
                  isAddedToCart={isAddedToCart}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
