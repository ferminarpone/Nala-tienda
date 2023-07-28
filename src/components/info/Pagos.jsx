import { Box, Center } from '@chakra-ui/react';
import Pago from '../../assets/informacion/pago.png';
import { MdOutlineLocalAtm, MdAccountBalance } from 'react-icons/md'
export const Pagos = () => {
  return (
    <Box h="500px" id='pagos'>
    <Center>
    <img src={Pago} alt="Métodos de pago"/>
    </Center>
    <Center>
    <h2>¿Caulés son los medios de pago?</h2>
    </Center>

    <div className='metodos'>
        <div className='efectivo'>
        <MdOutlineLocalAtm size="45px"/>
        <p>Efectivo </p>
        </div>
        <div className='transferencia'>
        <MdAccountBalance size="45px"/>
        <p>Transferencia bancaria</p>
        </div>
    </div>
    
    </Box>
  )
}
