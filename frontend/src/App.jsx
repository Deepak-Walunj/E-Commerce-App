import ShoppingCart from './Comonents/ShoppingCart.jsx'
import ProductList from './Comonents/ProductList.jsx'
import './App.css'

const App = () => {

  return (
    <div>
      <h1 className='app-heading'>E-Commerce Application</h1>
      <ProductList/>
      <ShoppingCart/>
    </div>
  )
}

export default App
