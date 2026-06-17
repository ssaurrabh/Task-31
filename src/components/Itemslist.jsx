import  { useContext } from 'react'
import { Contpro } from './Contextpro'

function Itemslist({handleAdd}) {

    const data = useContext(Contpro)



  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
           {
            data.map((item,idx)=>{
              return <div className="rounded-2xl overflow-auto">
                <img src={data[idx].image} alt={data[idx].name} />
                  <h2 className="text-center text-2xl font-semibold">{data[idx].name}</h2>
                  <p className="font-semibold text-2xl text-center">Rs: {data[idx].price}</p>
                  <button className="px-4 py-2 bg-amber-400 rounded-xl hover:bg-amber-600" onClick={()=>{
                    handleAdd(idx)
                  }}>Add To Cart</button>
                  
              </div>
            })
           }
        </div>
    </div>
  )
}

export default Itemslist
