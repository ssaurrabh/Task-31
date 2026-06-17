
import {Routes, Route} from 'react-router-dom'
import Payment from "./components/Payment"
import Maincont from "./components/Maincont"
import { useState } from 'react'

function App() {

 const [count, setCount] = useState([])

     
    function addToCart(idx) {
        setCount((prev) => [...prev, idx])
    }

    function remCart(idx) {
        setCount((prev) => {
            const targetidx = prev.indexOf(idx)
            if (targetidx !== -1) {
                const newCount = [...prev]
                newCount.splice(targetidx, 1)
                return newCount
            }
            return prev
        })
    }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Maincont count={count} handleAdd={addToCart} handleDec={remCart}/>}/>
        <Route path='/payments' element={<Payment count={count} handleAdd={addToCart} handleDec={remCart}/>}/>
      </Routes>
  
    </div>
  )
}

export default App
