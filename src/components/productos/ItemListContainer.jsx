import {useEffect, useState} from 'react';
// para las categorias import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Image } from '@chakra-ui/react';

export const ItemListContainer = () => {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
       const dataBase = getFirestore();
       const itemsCollection = collection(dataBase, "productos Shein");
       getDocs(itemsCollection).then((snapShot)=>{
        setProducto(
            snapShot.docs.map((item)=> ({id:item.id , ...item.data()}))
        );
       })      
    }, [])
    
    console.log(producto);
  return (
    <div>
        <h1>ItemListContainer</h1>
        {producto.map((p)=>
        <div>
        <h3>{p.nombre}</h3>
        <Image src={p.img} />
        </div>
        )} 
    </div>
  )
}
