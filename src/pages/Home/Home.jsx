import { useEffect, useState } from 'react'
// api
import { getProducts } from '../../consultas/products'
// components
import { Layaout, Card } from '../../components'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async() => {
    const prod = await getProducts()
    setProducts(prod)
    // console.log({prod})
  }

  return (
    <>
      <Layaout>
        <h1 className='text-3xl font-bold underline'>Home</h1>
        <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
          {products && products?.map((item) => (
            <Card 
              key={item?.id}
              id={item?.id}
              src={item?.images[0] ?? item?.images[1]}
              alt={item?.description}
              tag={item.category?.name ?? 'Others'}
              nameProduct={item?.title}
              price={item?.price}
            />
          ))}
        </div>
      </Layaout>
    </>
  )
}

export default Home
