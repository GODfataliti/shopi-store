import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { NavItem } from "./NavItem"

let menu1 = [
  { to:'/', children:'Shopi' },
  { to:'/clothes', children:'Clothes' },
  { to:'/electronics', children:'Electronics' },
  { to:'/fornitures', children:'Fornitures' },
  { to:'/toys', children:'Toys' },
  { to:'/others', children:'Others' },
]

let menu2 = [
  { to:'', children:'correo@example.com' },
  { to:'/my-orders', children:'My Orders' },
  { to:'/my-account', children:'My Account' },
  { to:'/sign-in', children:'Sign In' },
  // { to:'/', children:'🛒 0' },
]



export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {menu1?.map((ruta, index) => 
          (<li key={index} className='text-lg'>
            <NavItem to={ruta.to} children={ruta.children} activeStyle={activeStyle} />
          </li>)
        )}
      </ul >

      <ul className='flex items-center gap-3'>
        {menu2?.map((ruta, index) => 
          (<li key={index} className='text-lg'>
            <NavItem to={ruta.to} children={ruta.children} activeStyle={activeStyle} />
          </li>)
        )}
        <li>
          <NavItem to='/' children={`🛒 ${context?.count}`} activeStyle={activeStyle} />
        </li>
      </ul>

    </nav>
  )
}