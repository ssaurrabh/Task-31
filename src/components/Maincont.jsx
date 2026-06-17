
import Cart from "./Cart"
import Itemslist from "./Itemslist"
import Navbar from "./Navbar"



function Maincont({count, handleAdd, handleDec}) {


    return (
        <div>
            <Navbar />

            <div className="flex justify-around gap-5 mt-5 ">
                <div className="w-[40%]">
                    <Itemslist handleAdd={handleAdd} />
                </div>
                <div className="w-[50%]">
                    <Cart count={count} handleAdd={handleAdd} handleDec={handleDec} btnText="Proceed to Pay" btnLink="/payments"/>
                </div>
            </div>
        </div>
    )
}

export default Maincont
