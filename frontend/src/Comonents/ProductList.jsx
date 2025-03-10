import './ProductList.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';

const ProductList = () => {
    const dispatch = useDispatch()
    const [disableProducts, setDisableProducts] = useState([])
    const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
    ];
    const handleAddToCart = (product) =>{
        dispatch(addItemToCart(product))
        setDisableProducts([...disableProducts, product.id])
    }
    return (
    <div className="product-list">
        <h2 className="product-list-title">Products</h2>
        <ul className="product-list-items">
            {products.map((item) =>(
                <li key={item.id} className='product-list-item'>
                    <span>{item.name} - ${item.price}</span>
                    <button className={`add-to-cart-btn ${disableProducts.includes(item.id) ? 'Disabled' : ''}`}
                    onClick={() => handleAddToCart(item)}
                    disabled={disableProducts.includes(item.id)}
                    >
                        Add To Cart
                    </button>
                </li>
            )
            )}
        </ul>
    </div>
    );
};

export default ProductList;