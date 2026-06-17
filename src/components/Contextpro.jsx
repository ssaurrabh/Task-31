import { createContext } from 'react'


export const Contpro = createContext()

function Contextpro(props) {

    const mydata = [
    {
      image: '../images/1.jpg',
      name: "Nike Sneaker",
      desc: "this is card 1 desc",
      price:4500
    },
    {
      image: '../images/2.jpg',
      name: "Nike Black",
      desc: "this is card 2 desc",
      price:8900
    },
    {
      image: '../images/3.jpg',
      name: "Nike Multicolor",
      desc: "this is card 3 desc",
      price:7500
    },
    {
      image: '../images/4.jpg',
      name: "Nike Orange",
      desc: "this is card 4 desc",
      price:6500
    },
    {
      image: '../images/5.jpg',
      name: "Nike Women",
      desc: "this is card 5 desc",
      price:9700
    },
    {
      image: '../images/6.jpg',
      name: "Nike Red",
      desc: "this is card 6 desc",
      price:5300
    },
    {
      image: '../images/7.jpg',
      name: "Nike Neon",
      desc: "this is card 7 desc",
      price:7560
    },
    {
      image: '../images/8.jpg',
      name: "Nike White ",
      desc: "this is card 8 desc",
      price:10100
    },
   
  ]
  return (
   
<Contpro.Provider value={mydata}>
    {props.children}
</Contpro.Provider>
   
  )
}

export default Contextpro
