import { useContext } from 'react';
import { ShoppingCartContext } from '../../context'


const Card = (props) => {
  const { src, alt, tag, nameProduct, price, id} = props;
  const context = useContext(ShoppingCartContext);
  
  return (
    <div key={id} className='bg-white cursor-pointer w-56 h-60 rounded-lg m-2'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 justify-center items-center bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{tag}</span>
        <img 
          className='w-full h-full object-cover rounded-lg'
          src={src} 
          alt={alt}></img>
        <button 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => context?.setCount(context?.count + 1)}
        >
          +
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{nameProduct}</span>
        <span className='text-lg font-bold'>${price}</span>
      </p>
    </div>
  )
}

export default Card