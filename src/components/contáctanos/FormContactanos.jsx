import { Input, Textarea, Button, Center, Box } from "@chakra-ui/react";

export const FormContactanos = () => {
  return (
    <Box id="formContactanos">
      <h3>Envíanos un correo</h3>
      <Input placeholder="Nombre" className="input" mt="20px" />
      <Input placeholder="Correo electrónico" className="input" mt="10px"/>
      <Input placeholder="Télefono" className="input" mt="10px"/>
      <Textarea placeholder='Mensaje' h="150px" mt="10px"/>
      <Center>
      <Button colorScheme="teal" size="lg" mt="20px">
        ENVIAR 
      </Button>
      </Center>
    </Box>
  );
};
