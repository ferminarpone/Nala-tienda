import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const Formulario = () => {
  const {register, handleSubmit} = useForm();

  //Funcion... recibe los datos del formulario(data)
  const onSubmit = (data)=>{
    console.log(data)
  }
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
        <form onSubmit={ handleSubmit(onSubmit) }>
        {/*   <FormControl isRequired mt="50px"> */}
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
              id="formPersonalizados"
            >
              <GridItem colSpan={2}>
                <Input
                  type="text"
                  placeholder="Nombre"
                  {...register('nombre')}
                  isRequired

                  border="solid 2px #4A9A91"
                  borderRadius="14px"
                  h="70px"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Input
                  type="text"
                  placeholder="Apellido"
                  {...register('apellido',{required: true})}

                  border="solid 2px #4A9A91"
                  borderRadius="14px"
                  h="70px"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register('email')}

                  border="solid 2px #4A9A91"
                  borderRadius="14px"
                  h="70px"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  {...register('telefono')}

                  border="solid 2px #4A9A91"
                  borderRadius="14px"
                  h="70px"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Input
                  type="text"
                  placeholder="Url del producto Shein"
                  {...register('url')}

                  border="solid 2px #4A9A91"
                  borderRadius="14px"
                  h="70px"
                />
              </GridItem>
              <GridItem display="flex" justifyContent="end">
                <Button
                  type="submit"

                  colorScheme="teal"
                  borderRadius="14px"
                  fontFamily="Josefin Sans"
                  fontSize="1.4rem"
                  h="70px"
                  w="90%"
                >
                  Enviar
                </Button>
              </GridItem>
            </Grid>
        {/*   </FormControl> */}
        </form>
      </Container>
    </>
  );
};
