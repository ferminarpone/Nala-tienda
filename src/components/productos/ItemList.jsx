import React from "react";
import { Center, CircularProgress, Container, Grid } from "@chakra-ui/react";
import { Item } from "./Item";
import { Categorias } from "./Categorias";
export const ItemList = React.memo(({ product }) => {
  return (
    <>
      {product == "" ? (
        <Center height="500px">
          <CircularProgress isIndeterminate color="#7cbfba" />
        </Center>
      ) : (
        <>
          <Categorias />
          <Container id="containerItemList">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              gap={{ base: 4, sm: 6 }}
            >
              {product.map((item) => (
                <Item
                  key={item.id}
                  nombre={item.nombre}
                  categoria={item.categoria}
                  img={item.img}
                  id={item.id}
                  precio={item.precio}
                />
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
});
