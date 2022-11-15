
import Board  from "./components/Board.jsx"
import { createContext, useState } from 'react';
import { dictionary } from './components/variables';
import _ from 'lodash'

export const WordleContext = createContext()

function App() {

  
  const [word, setWord ] = useState(_.sample(dictionary).toUpperCase())
  const [completedRows , setCompletedRows] = useState([])
  const [guessWord , setGuessWord] = useState("")
  const [currentRow, setCurrentRow] = useState(0)

  function guessTheWord(char){
    if(guessWord.length ===5 ) return 
    setGuessWord(guessWord.concat(char))
  }

  function pressEnter(){
    if(currentRow > 5) return alert('Niestety wyczerpałeś wszystkie swoje próby. Prawidłowa odpowiedź to: '+word)
    if(guessWord.length<5) return
    if(!dictionary.includes(guessWord.toLocaleLowerCase())) return alert('Nie znaleziono słowa')
    if(guessWord === word) alert('Gratulacje, Wygrana!')
    
    setCurrentRow(currentRow+1)
    setCompletedRows([...completedRows ,currentRow])
    setGuessWord('')
    

  }

  function backspace(){
    setGuessWord(guessWord.slice(0 , guessWord.length-1))

  }

  return (
    < WordleContext.Provider value={{
      guessTheWord ,
       pressEnter ,
        completedRows ,
         currentRow, 
         word ,
         guessWord ,
          backspace 

    }} >
        <Board/>
    </ WordleContext.Provider>
  )
}

export default App;
