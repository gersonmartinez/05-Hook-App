

import { useCounter, useFetch } from "../Hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { counter, increment } = useCounter(1); //Hecho em la clase 128

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`)
  
    const { quote, author } = !!data && data[0]; // !: Negación de algo

    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading
              ? <LoadingQuote />
              : <Quote author={ author} quote = {quote} />
        }

        {/* Hecho em la clase 128 */}
        <button 
            className="btn btn-primary" 
            disabled = { isLoading }
            onClick={ () => increment() }>
            Next quote
        </button>

    </>
  )
}
