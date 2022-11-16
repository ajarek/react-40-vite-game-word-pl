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
            className='.button'
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
                    boxShadow:'2px 2px 0px rgba(0,0,0,0.4)', 
                    border:0, fontWeight:'bold'

         }}>{props.letter}</button>
    )
    }

    return(
       
        <button 
        className='button'
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
                boxShadow:'2px 2px 0px rgba(0,0,0,0.4)',
                border:0, fontWeight:'bold'

     }}>{props.letter}</button>
)

}
