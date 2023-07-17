import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

export const Formulario = () => {
  return (
    <>
      <Container maxWidth="90%" mt="90px">
        <div className="divTitle">
          <h2 className="title">COMPLETA EL FORMULARIO</h2>
          <Divider
            orientation="horizontal"
            color="#4A9A91"
            border="solid 1px"
            width="188px"
            className="dividerForm"
          />
        </div>

        <FormControl  isRequired mt="50px">
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            id="formPersonalizados"
          >
            <GridItem colSpan={2}>
              <Input
                placeholder="Nombre"
                border="solid 2px #4A9A91"
                className="input"
                borderRadius="14px"
                h="70px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                placeholder="Apellido"
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="70px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="email"
                placeholder="Email"
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="70px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="tel"
                placeholder="Teléfono"
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="70px"
              />
            </GridItem>
            <GridItem colSpan={3}>
              <Input
                placeholder="Url del producto Shein"
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="70px"
              />
            </GridItem>
            <GridItem display="flex" justifyContent="end">
              <Button
                colorScheme="teal"
                borderRadius="14px"
                fontFamily="Josefin Sans"
                fontSize="1.4rem"
                type="submit"
                h="70px"
                w="90%"
              >
                Enviar
              </Button>
            </GridItem>
          </Grid>
        </FormControl>
      </Container>
    </>
  );
};
