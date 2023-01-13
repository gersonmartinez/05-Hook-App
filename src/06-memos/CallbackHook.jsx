import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(  // Esta función no está cambiando
      (value) => {
        setCounter( ( c ) => c + value ); //(value) => value + 1 con el contador puede ir avanzando 
      },
      [],
    )

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementFather } />
    </>
  )
}
