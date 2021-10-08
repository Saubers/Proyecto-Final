import {useState} from 'react'

export function useLocalStorage (key,initialValue){
    
    const [storedValue,setStoredValue ] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })
   // console.log('storedValue',storedValue)
    //  function borrar() {
    //     window.localStorage.clear();
    // }
    //  borrar()  
    const setValue = value =>{
        console.log('setvalu',value)
        try {
            setStoredValue(value)
            window.localStorage.setItem(key,JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue,setValue]
}   
  export function borrar(item){
    window.localStorage.removeItem(item);
  } 