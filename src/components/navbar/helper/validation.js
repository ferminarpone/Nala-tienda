//Validación para estilos condicionales.
export const validation = (locationOne) => {
  if (locationOne.pathname == "/") {
    return true;
  } else if (locationOne.pathname == "/personalizados") {
    return true;
  } else if (locationOne.pathname == "/informacion") {
    return true;
  } else {
    return false
  }
};
