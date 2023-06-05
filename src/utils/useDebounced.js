import { useState, useEffect } from "react";

//recibimos un value y el tiempo del delay
export const useDebounce = (value, milliSeconds) => {

  //state para actualizar el valor 
  const [debouncedValue, setDebouncedValue] = useState(value);

  //detectamos cada vez que el valor recibido cambia
  useEffect(() => {

    // lo actualizamos  en nuestro state cada que termina el delay recibido
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    //PERO si en el componente padre el valor enviado al debounce cambia
    //la actualizacion se cancelara el anterior
    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  //asi que, solo retornamos el valor una vez que deja de actualizarse
  return debouncedValue;
};

// ejemplo de uso en componentes:
// const debounced = useDebounce(inputValue, 2000);
// useEffect(()=>{
//   aqui funcion que necesitas ejecutar
//  cuando finalice todo cambio
// },[debounced])