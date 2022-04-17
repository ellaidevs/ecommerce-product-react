import React from 'react'

function CartContent({ toggleCart }) {
  return (
    <div>
      {toggleCart && (
        <div className="cart-card">
          <h4 className="cart-card-title">Cart</h4>
          <div className="cart-content">
            <img src="" alt="product" />
            <div className="cart-product-details">
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x 3</p>
            </div>
          </div>
          <button className="btn-checkout">Checkout</button>
        </div>
      )}
    </div>
  )
}

export default CartContent
