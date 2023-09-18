import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { FavoritoContext } from "../../context/FavContext";

export const FavItem = ({ id, nombre, img, cantidad }) => {
  const { fav, setFav } = useContext(FavoritoContext);

  //Función que elimina un producto de favoritos.
  const removeItem = () => {
    const newFav = fav.filter((item) => item.id !== id);
    setFav(newFav);
  };


  // variable + función que genera el listado de productos elegidos.
  /*   const productList = fav.map((e)=> ` ${JSON.stringify(e.nombre, e.id)}`)  
  const sendWsp = ()=>{
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20productos%3A%0A%0A%2AProductos%3A%2A ${productList}`;
    window.open(url,'_blank') 
    
  } */
  return (
    <>
      <Grid
        templateColumns="repeat(10,1fr)"
        gap={{ base: 1, sm: 6 }}
        id="favItem"
      >
        <GridItem colSpan={{ base: 3, sm: 2 }}>
          <Image src={img} className="imgFav" />
        </GridItem>
        <GridItem
          colSpan={5}
          display="flex"
          alignItems="center"
          className="gridItem"
        >
          <h1>{nombre}</h1>
        </GridItem>
        <GridItem
          colSpan={{ base: 0, sm: 2 }}
          display="flex"
          alignItems="center"
        ></GridItem>
        <GridItem colSpan={1} display="flex" alignItems="center">
           <Button
            variant="solid"
            className="favHeart"
            onClick={removeItem}
          >
              <RxCross2 className="cross" />
          </Button> 
        </GridItem>
      </Grid>
    </>
  );
};
