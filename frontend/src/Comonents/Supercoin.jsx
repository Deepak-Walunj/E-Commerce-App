import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Supercoin = () =>{
    const [supercoins, setSupercoin]  = useState(0)
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    useEffect(() =>{
        if(totalAmount>=100 && totalAmount<200){
            setSupercoin(10)
        }
        else if(totalAmount>=200 && totalAmount<300){
            setSupercoin(20)
        }
        else if(totalAmount>=300){
            setSupercoin(30)
        }
        else{
            setSupercoin(0)
        }
    }, [totalAmount])

    return(
        <div className="super-coins" style={{textAlign:'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {supercoins} super coins with this purchase.</p>
        </div>
    )
}

export default Supercoin