import {
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FavoritoContext } from "../../context/FavContext";

export const Formulario = () => {
  const { register, handleSubmit, reset } = useForm();

  const { isOpen } = useContext(FavoritoContext);
  //Funcion... recibe los datos del formulario(data)
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20de%20producto%20personalizado%0A%0A%2AUrl%20del%20producto%3A%2A ${data.url}%0A%0A%2ADatos%20cliente%2A%0ANombre%3A%20${data.nombre} ${data.apellido}%0AEmail%3A%20${data.email}%0ATel%C3%A9fono%3A${data.telefono}`;
    window.open(url, "_blank");
    reset();
  };
  return (
    <>
      <Container id="formulario">
        <div className="divTitle">
          <h2 className="title">COMPLETA EL FORMULARIO</h2>
          <Divider
            orientation="horizontal"
            color="#4A9A91"
            border="solid 1px"
            className="dividerForm"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            templateRows={{ base: "repeat(6, 1fr)", sm: "repeat(3, 1fr)" }}
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(4, 1fr)" }}
            gap={4}
            mt="50px"
            id="formPersonalizados"
          >
            <GridItem colSpan={{ base: "1", sm: "2" }}>
              <input
                type="text"
                placeholder="Nombre*"
                {...register("nombre")}
                /* isRequired */
              />
            </GridItem>
            <GridItem colSpan={{ base: "1", sm: "2" }}>
              <input
                type="text"
                placeholder="Apellido*"
                {...register("apellido")}
                /* isRequired */
              />
            </GridItem>
            <GridItem colSpan={{ base: "1", sm: "2" }}>
              <input type="email" placeholder="Email" {...register("email")} />
            </GridItem>
            <GridItem colSpan={{ base: "1", sm: "2" }}>
              <input
                type="tel"
                placeholder="Teléfono*"
                {...register("telefono")}
               /*  isRequired */
              />
            </GridItem>
            <GridItem colSpan={{ base: "1", sm: "3" }}>
              <input
                type="text"
                placeholder="Url del producto Shein*"
                {...register("url")}
               /*  isRequired */
              />
            </GridItem>
            <GridItem display="flex" justifyContent="end">
              <Button type="submit">Enviar</Button>
            </GridItem>
          </Grid>
        </form>
        <p className="requerido">* Campos requeridos</p>
      </Container>
    </>
  );
};
