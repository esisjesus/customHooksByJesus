import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    
    const [counter, setCounter] = useState( initialValue )
    
    const counterFunctions = ( () => {
        
        const increment = ( value = 1 ) => { 

            setCounter( counter + value )

        }
        const decrement = ( value = 1 ) => { 

            if( counter === 0 ) return
            setCounter( counter - value )

        }
        const reset = () => { 
            setCounter( initialValue )
        }

        return {
            increment, decrement, reset
        }
    } )()

    return{
        counter,
        counterFunctions
    }
}
