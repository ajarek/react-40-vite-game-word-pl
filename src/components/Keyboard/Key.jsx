import React , {useContext}from 'react'
import { WordleContext } from '../../App'

export default function Key(props) {

    const {guessTheWord , backspace , pressEnter} = useContext(WordleContext)


    function handleClickForBig(){
        if(props.letter === "Enter"){
                pressEnter()
        }
        else {
            backspace()
        }
    }

    if(props.big){

        return(
       
            <button 
             onClick={()=> handleClickForBig()}
            style={{
                    width: 65.4,
                    height:50,
                    margin:3,
                    borderRadius:3,
                    display:'grid',
                    placeItems:'center',
                    fontSize:16,
                    backgroundColor:'#848789',
                    color:'black',
                    fontFamily:'Arial',
                    cursor:'pointer', 
                    border:0, fontWeight:'bold'

         }}>{props.letter}</button>
    )
    }

    return(
       
        <button 
         onClick={()=> guessTheWord(props.letter)}
        style={{
                width:43,
                height:50,
                margin:3,
                borderRadius:3,
                display:'grid',
                placeItems:'center',
                fontSize:16,
                backgroundColor:'#848789',
                color:'black',
                fontFamily:'Arial',
                cursor:'pointer', 
                border:0, fontWeight:'bold'

     }}>{props.letter}</button>
)

}
