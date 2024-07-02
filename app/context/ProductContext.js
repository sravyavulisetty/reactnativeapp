import { createContext, useState } from "react";
const ProductContext = createContext();
function ProductProvider({children}){
    const [wishlist, setWishlist] = useState([]);
    const [cart, setAddToCart] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prev) => [...prev, product])
    }
    const addToCart = (product) => {
        setAddToCart((prev) => [...prev, product])
    }
    const removeFromWishlist = (product) => {
        const filtered = wishlist.filter((p) =>p.id !== product.id)
        setWishlist(filtered);
    }
    const removeFromCart = (product) => {
        const filtered = cart.filter((p) =>p.id !== product.id)
        setAddToCart(filtered);
    }
    return(
        <ProductContext.Provider value = {{wishlist, addToWishlist, removeFromWishlist, addToCart, removeFromCart, cart}}>
            {children}
        </ProductContext.Provider>
    )
}
export {ProductContext, ProductProvider}