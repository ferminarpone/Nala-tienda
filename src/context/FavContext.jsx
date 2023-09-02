import { createContext, useState } from "react"

export const FavoritoContext = createContext(null);

export const FavContext = ({children}) => {
    const [fav, setFav] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


  return (
    <FavoritoContext.Provider value={{fav, setFav, isOpen, setIsOpen}}>
        {children}
    </FavoritoContext.Provider>
  )
}
