import { XMarkIcon } from '@heroicons/react/24/outline'
import './style.css'

const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black bg-white rounded-lg'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='font-medium text-xl'>Detalle</h2>
        <XMarkIcon className='size-9'/>
        
      </div>
    </aside>
  )
}

export default ProductDetail