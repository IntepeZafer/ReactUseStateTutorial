import './App.css'
import { useState } from 'react'
function App() {
  const [value, setvalue] = useState(0)
  function handleClick(){
    setvalue(value + 1)
  }
  return (
    <div className='App'>
      <h1>Kurslarım</h1>
      <p>Mevcut Kurs Sayısı: {value}</p>
      <button onClick={handleClick}>Kurs Ekle</button>
    </div>
  )
}

export default App
