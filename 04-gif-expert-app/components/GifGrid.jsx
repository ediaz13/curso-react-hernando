import { useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const GifGrid = ( { category } ) => {
    
    useEffect(() => {
        getGifs( category );
    
    }, [])

    return (
    <>
        <h3>{ category }</h3>
        <p>Hola Mundo</p>
    </>
  )
}
