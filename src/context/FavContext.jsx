import { createContext, useEffect, useState } from "react";

export const FavoritoContext = createContext(null);

export const FavContext = ({ children }) => {
  // Array de productos en favoritos
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favoritos'))||[]);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(fav));
  }, [fav])
  
  //UseState para el manejo del NavBar
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
   // Función que agrega o elimina un producto de favoritos.
  const addToFav = (id, img, nombre) => {
    const itemExist = fav.find((item) => item.id === id);
    if (itemExist) {
      const newFav = fav.filter((item) => item.id !== id);
      setFav(newFav);
    } else {
      const favItem = [...fav, { id, img, nombre }];
      setFav(favItem);
    }
  };

  return (
    <FavoritoContext.Provider
      value={{ fav, setFav, isOpen, setIsOpen, idFound, addToFav }}
    >
      {children}
    </FavoritoContext.Provider>
  );
};
