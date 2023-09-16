import {
  Button,
  Container,
  Divider,
  Textarea,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FavoritoContext } from "../../context/FavContext";
import { useContext } from "react";

export const FormularioFav = () => {
  const { register, handleSubmit, reset } = useForm();
  const { fav, setFav } = useContext(FavoritoContext);

  // variable + función que genera el listado de productos elegidos.
  const productList = fav.map((e) => ` ${JSON.stringify(e.nombre, e.id)}`);

  //Funcion... recibe los datos del formulario(data)
  const onSubmit = (data) => {
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20productos%0A%0A%2AProductos%3A%2A ${productList}%0A%0A%2AMensaje%3A%2A%0A${data.consulta}%0A%0A%2ADatos%20cliente%2A%0ANombre%3A%20${data.nombre} ${data.apellido}%0AEmail%3A%20${data.email}%0ATel%C3%A9fono%3A${data.telefono}`;
    window.open(url, "_blank");
    reset();
  };
  return (
    <>
      <div id="formularioFavorito" >
        <div className="divTitleFormFav">
          <h2 className="titleFormFav">
            COMPLETA CON TUS DATOS
          </h2>
          <Divider
            orientation="horizontal"
            color="#4A9A91"
            border="solid 1px"
            width="100%"
            className="dividerFormFav"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(1, 1fr)" 
            gap={4}
            mt="30px"
          >
            <GridItem colSpan={2}>
              <Input
                type="text"
                placeholder="Nombre*"
                {...register("nombre")}
                isRequired
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="45px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="text"
                placeholder="Apellido*"
                {...register("apellido")}
                isRequired
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="45px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="45px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="tel"
                placeholder="Teléfono*"
                {...register("telefono")}
                isRequired
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="45px"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Textarea
                placeholder="Mensaje"
                border="solid 2px #4A9A91"
                borderRadius="14px"
                h="45px"
                {...register("consulta")}
              />
            </GridItem>
            <GridItem className="buttonFormFav" colSpan={2}>
              <Button
                type="submit"
                colorScheme="teal"
                borderRadius="14px"
                fontFamily="Josefin Sans"
                fontSize="1.2rem"
                h="45px"
                w="70%"
              >
                Enviar
              </Button>
            </GridItem>
          </Grid>
        </form>
        <p className="requerido">* Campos requeridos</p>
      </div>
    </>
  );
};
