import { Contactanos } from "./components/contáctanos/Contactanos";
import { ItemDetailContainer } from "./components/detalles/ItemDetailContainer";
import { Home } from "./components/home/Home";
import { Informacion } from "./components/info/Informacion";
import { Nosotros } from "./components/nosotros/Nosotros";
import { Personalizados } from "./components/personalizados/Personalizados";
import { ItemListContainer } from "./components/productos/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/productos/:category" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          {/* Ver rutas para las categorias */}
          <Route exact path="/personalizados" element={<Personalizados />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/contactanos" element={<Contactanos />} />
          <Route exact path="/informacion" element={<Informacion/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
