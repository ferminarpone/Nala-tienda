import {
  Button,
  Divider,
  Textarea,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { FavoritoContext } from "../../context/FavContext";
import { useContext } from "react";

export const FormularioFav = ({ modalClosed }) => {
  const { register, handleSubmit, reset } = useForm();
  const { fav, setFav } = useContext(FavoritoContext);
  // variable + función que genera el listado de productos elegidos.
  const productList = fav.map((e) => ` ${JSON.stringify(e.nombre, e.id)}`);
  //Funcion... recibe los datos del formulario(data)
  const onSubmit = (data) => {
    const url = `https://web.whatsapp.com/send?phone=543513902114&text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20productos%0A%0A%2AProductos%3A%2A ${productList}%0A%0A%2AMensaje%3A%2A%0A${data.consulta}%0A%0A%2ADatos%20cliente%2A%0ANombre%3A%20${data.nombre} ${data.apellido}%0AEmail%3A%20${data.email}%0ATel%C3%A9fono%3A${data.telefono}`;
    window.open(url, "_blank");
    reset();
    modalClosed();
    setFav([]);
  };
  return (
    <>
      <div id="formularioFavorito">
        <button className="closed" onClick={modalClosed}>
          <RxCross2 />
        </button>
        <div className="divTitleFormFav">
          <h2 className="titleFormFav">COMPLETA CON TUS DATOS</h2>
          <Divider orientation="horizontal" className="dividerFormFav" />
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
                className="inputForm"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="text"
                placeholder="Apellido*"
                {...register("apellido")}
                isRequired
                className="inputForm"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="inputForm"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="tel"
                placeholder="Teléfono*"
                {...register("telefono")}
                isRequired
                className="inputForm"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Textarea
                placeholder="Mensaje"
                {...register("consulta")}
                className="inputForm"
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
