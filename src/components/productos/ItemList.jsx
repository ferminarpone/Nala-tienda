import { Center, CircularProgress, Container, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Item } from "./Item";
import { Categorias } from "./Categorias";

const ItemList = ({ product, categoria }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {product == "" ? (
        <Center minH="400px">
          <CircularProgress isIndeterminate color="#7cbfba" />
        </Center>
      ) : (
        <>
          <Categorias />
          <Container
            maxWidth="90%"
            mt="30px"
            display="flex"
            justifyContent="center"
          >
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              gap={{base:4, sm:6}}
            >
              {product.map((item) => (
                <Item
                  key={item.id}
                  nombre={item.nombre}
                  categoria={item.categoria}
                  img={item.img}
                  id={item.id}
                />
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default React.memo(ItemList);
