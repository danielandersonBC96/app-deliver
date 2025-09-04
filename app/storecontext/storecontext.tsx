import React, { createContext, useState, ReactNode, useContext } from "react";


type Item ={
id:string;
name:string;
image:any;
price?:String;

}

type StoreContextType={

    cart:[];
    addTpcart: (item: Item) => void;
    removeFromCart: (id:string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StorePorivuder = ({Children}:{Children: ReactNode }) => {


    const [cart, setCart] = useState<Item[]>([]);

    const addToCart =(item: Item) =>{
        setCart(prev => [...prev, item]);
    }
const removeFromCart= (id: string) => {
    setCart(prev => prev.filter( i => i.id! === id))
}

return(
    <StoreContext.Provider value={{cart,addToCart,removeFromCart}}>
        {Children}
    </StoreContext.Provider>
)
}


export const useStore =()=> {
 const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};


