import React from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'
export default function Board() {
  return (
    <div className='wordle'>
      <h3 onClick={()=>location.reload()}><span className='wordle-letter'>W</span><span className='wordle-letter'>O</span><span className='wordle-letter'>R</span><span className='wordle-letter'>D</span><span className='wordle-letter'>L</span><span className='wordle-letter'>E</span>    <span className='wordle-letter pl'>P</span><span className='wordle-letter pl'>L</span>       </h3>
      <Grid />
      <Keyboard />
    </div>
  )
}
