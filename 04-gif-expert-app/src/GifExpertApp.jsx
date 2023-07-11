
import { useState } from 'react'
import { AddCategory } from '../components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Death Note' ]);
    
    const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );
        
        if(categories.includes(newCategory)) return;

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
                onNewCategory = { onAddCategory }
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
