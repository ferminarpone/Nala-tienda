import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { FavoritoContext } from "../../context/FavContext";
import { Link } from "react-router-dom";

export const FavItem = ({ id, nombre, img }) => {
  const { fav, setFav } = useContext(FavoritoContext);
  console.log(id);
  //Función que elimina un producto de favoritos.
  const removeItem = () => {
    const newFav = fav.filter((item) => item.id !== id);
    setFav(newFav);
  };

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
          <Link to={`/producto/${id}`}>
            <h1 className="nombre">{nombre}</h1>
          </Link>
        </GridItem>
        <GridItem
          colSpan={{ base: 0, sm: 2 }}
          display="flex"
          alignItems="center"
        ></GridItem>
        <GridItem colSpan={1} display="flex" alignItems="center">
          <Button variant="solid" className="favHeart" onClick={removeItem}>
            <RxCross2 className="cross" />
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};
