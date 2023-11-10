export const hrFunction = (catLocation) => {
    switch (catLocation.pathname) {
      case "/productos/piercing":
        return "piercing";
        break;
      case "/productos/llaveros":
        return "llaveros";
        break;
      case "/productos/novedades":
        return "novedades";
        break;
      case "/productos/anillos":
        return "anillos";
        break;
      case "/productos/cabello":
        return "cabello";
        break;
      case "/productos/body%20chain":
        return "body chain";
        break;
      case "/productos/collares":
        return "collares";
        break;
      case "/productos/escritorio":
        return "escritorio";
        break;
      case "/productos":
        return "todo";
        break;
    }
  };