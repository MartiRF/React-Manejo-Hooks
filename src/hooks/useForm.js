import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    const [formState, setFormState] = useState( initialForm );
    
    
    const onInputChange = ( {target} ) => {
        const { value,name } = target;
    
        setFormState({
          ...formState,
          [name]:value
        })
    }
    
    const onReset = () => {
        // console.log('Reset')
        setFormState(initialForm)
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onReset,
  }
}
