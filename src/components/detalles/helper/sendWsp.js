//Función que envia el producto en cuestion por wsp.
export const sendWsp = (nombre, currentUrl) => {
  const url = `https://wa.me/543513902114?text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20producto%0A%0A%2AProducto%3A%2A ${nombre}%0A%0A${currentUrl}`;
  window.open(url, "_blank");
};
