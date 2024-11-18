import { useRoutes, BrowserRouter } from 'react-router-dom'
// rutas
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../components/'
// context
import { ShoppingCardProvider } from '../../context'
// css
import '../../App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
