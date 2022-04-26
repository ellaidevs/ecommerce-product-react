import React from 'react'
import { ReactComponent as IconDelete } from '../assets/icon-delete.svg'
import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { resetCart } from '../redux/cart'
import Swal from '../sweetalert'

function CartContent({ toggleCart }) {
  const cartValue = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  const clearCart = () => {
    Swal.fire({
      title: 'Do you want to clear your cart?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Yes, clear the cart',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetCart())
        Swal.fire({
          title: 'Cart have been cleared!',
          icon: 'success',
          showConfirmButton: false,
        })
      }
    })
  }

  let cartContent
  if (cartValue > 0) {
    cartContent = (
      <div className="content">
        <div className="cart-content">
          <div className="cart-product-img">
            <img src={product1Thumbnail} alt="product" />
          </div>
          <div className="cart-product-details">
            <p>Fall Limited Edition Sneakers</p>
            <p className="cart-product-price">
              $125.00 x {cartValue} <b>${125 * cartValue}.00</b>
            </p>
          </div>
          <IconDelete onClick={clearCart} className="icon-delete" />
        </div>
        <button className="btn-checkout">Checkout</button>
      </div>
    )
  } else {
    cartContent = <div className="content cart-empty">Your cart is empty</div>
  }

  return (
    <div>
      {toggleCart && (
        <div className="cart-card">
          <h4 className="cart-card-title">Cart</h4>
          {cartContent}
        </div>
      )}
    </div>
  )
}

export default CartContent
