import React from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'
export default function Board() {
  return (
    <div className='wordle'>
      <h3>WORDLE PL</h3>
      <Grid />
      <Keyboard />
    </div>
  )
}
