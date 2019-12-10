import React, { useState  } from 'react';
import InputNumber from './components/InputNumber'
import TestConfirm from './page/TestConfirm'
import './App.css';

function App(){
  const [value,setValue] = useState('aaa')
  return (
    <div>
      <InputNumber value={value}  onChange={e=>{}}/>
      <InputNumber defaultValue={value} onChange={e=>{}}/>
      <TestConfirm />
    </div>
  )
}

export default App
