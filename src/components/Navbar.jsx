import {Link} from 'react-router-dom'



function Navbar(props) {

  return (
    <div>
        <h1>{props.theme}</h1>
         <div className='bg-blue-400 h-fit w-80% flex justify-around p-4 sticky top-0 z-10 text-white'>
      <div>
        <Link to='/'><img src="../../public/joomla.png" alt="logo" className='h-10 ' /></Link>
      </div>
      <div><Link to='/'>Home</Link></div>
      
    </div>
    </div>
  )
}

export default Navbar
