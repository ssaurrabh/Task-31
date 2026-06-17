
import Cart from './Cart'
import Navbar from './Navbar'

function Payment({count, handleAdd, handleDec}) {

  
  return (
    <div>
        <Navbar/>
      <div className='flex justify-around gap-10 p-5'>
        <div className='p-4 flex flex-col gap-5 w-[50%]'>
          <form>
            <input type="radio" name='cc'/>&nbsp;
            <label htmlFor="cash">Cash on Delivery</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name='cc'/>&nbsp;
            <label htmlFor="cash">Credit Card</label>
          </form>
          <div className='outline-2 outline-dashed outline-fuchsia-600 p-4 rounded-2xl'>
            <form>
              <label>Enter Your Card Number</label><br />
              <input type="number" className='outline rounded my-3'/><br />
              <label>Enter Card Expiry Date</label><br />
              <input type="number" className='outline rounded my-3'/><br />
              <label>Enter CVV Number</label><br />
              <input type="number" className='outline rounded my-3'/>
            </form>
            <button className='ml-4 bg-amber-300 rounded px-3 py-1 active:scale-95'>Confirm Payment</button>
          </div>
        </div>
        <div className='mt-10 w-[40%] rounded-2xl'>
          <Cart count={count} handleAdd={handleAdd} handleDec={handleDec} btnText="Go Back" btnLink="/"/>
        </div>
      </div>
    </div>
  )
}

export default Payment
