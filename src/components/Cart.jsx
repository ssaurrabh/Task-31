import { useContext } from "react";
import { Contpro } from "./Contextpro";
import { Minus, Plus } from 'lucide-react';
import {Link} from 'react-router-dom'

function Cart(props) {

    const userData = useContext(Contpro)
    const { count, handleAdd, handleDec, btnLink, btnText } = props;


    const total = count.reduce((totall, idx) => {
        return totall + userData[idx].price
    },0)

    const uniqInd = [...new Set(count)]

    return (
        <div className="outline-blue-600 outline-2 outline-dashed rounded p-3">
            <h2 className="font-semibold my-3">CartItems {count.length}</h2>
            {
                count.length === 0?(
                    <p>Your Cart is empty</p>
                ):(
                    <div>
                       {
                        uniqInd.map((items,ind)=>{
                            const itm = userData[items]
                            const qty = count.filter(id=>id===items).length
                            return (
                                <div className="flex justify-around">
                                    <img className="h-15" src={itm.image} alt={itm.name} />
                                    <h2>{itm.name}</h2>
                                    <p>Price Rs: {itm.price}</p>
                                    <div>
                                        <button className="bg-blue-400 px-3 py-1 rounded" onClick={()=>{
                                            handleDec(items)
                                        }}><Minus /></button>
                                        <span className="px-2 text-2xl">{qty}</span>
                                        <button className="bg-blue-400 px-3 py-1 rounded" onClick={()=>{
                                                handleAdd(items)
                                        }}><Plus /></button>
                                    </div>
                                </div>

                            )
                        })
                       }
                    </div>
                )
            }
            <h2 className="text-lg font-semibold my-5">Total Amount: Rs {total}</h2>
           <Link to={btnLink || '/'} className="px-3 py-1 rounded bg-blue-300">{btnText || 'Proceed to Payment'}</Link>
        </div>
    )
}

export default Cart
