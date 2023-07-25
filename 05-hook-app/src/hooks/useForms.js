import { useState } from "react";

export const useForms = ( intialForm = {} ) => {
    
    const [formState, setformState ] = useState( intialForm );
  
    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setformState({
        ...formState,
        [ name ]: value
      });
    }


    return {
        ...formState,
        formState,
        onInputChange,
    };
}
