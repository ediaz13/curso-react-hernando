
import { useState } from 'react'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Death Note' ]);
    
    const onAddCategory = () => {
       setCategories( [...categories, 'Jamoncito'] );
       //setCategories( cat => [...cat, 'Jamoncito'] );

    }


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category } > { category } </li>
                    })
                }
            </ol>
                {/* Gif Item */}
        </>
        
    )
}