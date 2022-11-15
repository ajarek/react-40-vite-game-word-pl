import React, { useState } from 'react'
import { WordleContext } from '../../App'

export default function Tile({id , rowId}) {
    
    const [letter  , setLetter]= useState('')
    const [completed , setCompleted] = useState(true)
    const {guessWord , word , currentRow , completedRows} = React.useContext(WordleContext)
    const [colors , setColor] = useState({back:"white" , font:"black"})

    const style ={
        backgroundColor: colors.back,
        color: colors.font
    }

    React.useEffect(()=>{   
        if(currentRow === rowId){
            setLetter(guessWord[id])
        }
        if(completedRows.includes(rowId) && completed){
            changeColors()
            setCompleted(false)
        }
       
    },[guessWord, completedRows, currentRow, rowId, completed, id, changeColors])
    

    
    function changeColors(){
        const arrayWord = word.split('')
        if(arrayWord.includes(letter)){
            if (arrayWord[id]===letter){  
                return setColor({back:'lightgreen' , font:'white'})
            }
            return setColor({back:'gold', font:'white'})
        }
        return setColor({back:"grey" , font:"white"})
    }

    return (
        <div style={style} className="title">
            <p>{letter}</p>
            
        </div>
    )
}
