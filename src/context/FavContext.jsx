import { createContext, useState } from "react";

export const FavoritoContext = createContext(null);

export const FavContext = ({ children }) => {
  const [fav, setFav] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  //Función que devuelve true si el elemento se enfuentra en Favoritos.
  const idFound = (id) => {
    const idFind = fav.find((item) => item.id === id);
    if (idFind) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <FavoritoContext.Provider
      value={{ fav, setFav, isOpen, setIsOpen, idFound }}
    >
      {children}
    </FavoritoContext.Provider>
  );
};
