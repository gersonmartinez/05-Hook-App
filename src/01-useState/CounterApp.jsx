import { useState } from "react"

export const CounterApp = () => {

    const [ state, setCounter] = useState({    //Usar state para mantener el counter2 y 3
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3} = state //Para mantener el counter 2 y 3

  return (

    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>

        <hr />     {/* hr: Hacer una línea */}
                            {/* btn. animación al boton */}
        <button className="btn" 
                onClick={ 
                () => setCounter({
                    ...state,       //mantener counter 2 y 3, y que el counter1 esté cambiando
                    counter1:  counter1 + 1,
                })  }
        >+1</button>
    </>
    
  )
}
