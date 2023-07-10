import React, { useState } from "react";

export const AddCategory = () => {
    const [inputValue, setinputValue] = useState("Mogul");

    const onInputChange = (target) => {
        setinputValue(target.value);
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(inputValue)
    };

    return (
        <form onSubmit={( event ) => onSubmit( event )}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={( event ) => onInputChange}
            />
        </form>
    );
};
