import { Contactanos } from "./components/contactanos/Contactanos";
import { ItemDetailContainer } from "./components/detalles/ItemDetailContainer";
import { Home } from "./components/home/Home";
import { Informacion } from "./components/info/Informacion";
import { Nosotros } from "./components/nosotros/Nosotros";
import { Personalizados } from "./components/personalizados/Personalizados";
import { ItemListContainer } from "./components/productos/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavContext } from "./context/FavContext";
import { Favoritos } from "./components/favoritos/Favoritos";

export const App = () => {
  return (
    <>
      <FavContext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route
              exact
              path="/productos/:category"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/producto/:id"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/personalizados" element={<Personalizados />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/contactanos" element={<Contactanos />} />
            <Route exact path="/informacion" element={<Informacion />} />
            <Route exact path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </FavContext>
    </>
  );
};
