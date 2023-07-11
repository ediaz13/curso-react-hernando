
import { useState } from 'react'
import { AddCategory } from '../components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Death Note' ]);
    
    const onAddCategory = ( newCategory ) => {
        console.log( newCategory );
        
        setCategories( [ newCategory, ...categories ] );
       //setCategories( cat => [...cat, 'Evangelion'] );

    }


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories= { setCategories }
                onNewCategory = { ( event ) => onAddCategory(event) }
            />

            {/* Listado de Gif */}
            
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
