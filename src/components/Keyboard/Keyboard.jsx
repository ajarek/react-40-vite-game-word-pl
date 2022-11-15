import React from 'react'
import Key from './Key'

export default function Keyboard() {
  const set1 = ['Q', 'W', 'E', 'Ę', 'R', 'T', 'Y', 'U', 'I', 'O', 'Ó', 'P']
  const set2 = ['A', 'Ą', 'S', 'Ś', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ł']
  const set3 = ['Z', 'Ż', 'Ź', 'X', 'C', 'Ć', 'V', 'B', 'N', 'Ń', 'M']

  function Set1() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 0,
        }}
      >
        {set1.map((char, index) => (
          <Key
            key={index}
            letter={char}
          />
        ))}
      </div>
    )
  }

  function Set2() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 0,
        }}
      >
        {set2.map((char, index) => (
          <Key
            key={index}
            letter={char}
          />
        ))}
      </div>
    )
  }

  function Set3() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 0,
        }}
      >
        <Key
          big={true}
          letter={'Enter'}
        />
        {set3.map((char, index) => (
          <Key
            key={index}
            letter={char}
          />
        ))}
        <Key
          big={true}
          letter={'🔙'}
        />
      </div>
    )
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <Set1 />
      <Set2 />
      <Set3 />
    </div>
  )
}
