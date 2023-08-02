import { createContext, useState } from "react"

export const FavoritoContext = createContext(null);

export const FavContext = ({children}) => {
    const [fav, setFav] = useState([]);

  return (
    <FavoritoContext.Provider value={{fav, setFav}}>
        {children}
    </FavoritoContext.Provider>
  )
}
