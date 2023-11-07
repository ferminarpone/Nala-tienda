import { HashRouter, Routes, Route } from "react-router-dom";
import { Contactanos, ItemDetailContainer, Home, Informacion, Nosotros, Personalizados, ItemListContainer, Favoritos } from "./components";
import { FavContext } from "./context/FavContext";

export const App = () => {
  return (
    <>
      <FavContext>
        <HashRouter>
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
        </HashRouter>
      </FavContext>
    </>
  );
};
