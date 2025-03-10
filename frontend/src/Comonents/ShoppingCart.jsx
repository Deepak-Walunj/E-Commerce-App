import './ShoppingCart.css'

const ShoppingList = () =>{
    return (
        <>
        <div className="shopping-cart">
            <h2 className="shopping-cart-title">Shopping Cart</h2>
            <ul className="cart-items">
            
            </ul>
            <button className="clear-cart-btn">Clear Cart</button>
        </div>
        </>
        );
}

export default ShoppingList;