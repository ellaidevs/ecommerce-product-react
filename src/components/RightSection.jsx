import React from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import { ReactComponent as IconMinus } from '../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/counter'
import { addToCart } from '../redux/cart'
import Swal from '../sweetalert'

const RightSection = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const clickCart = () => {
    if (count > 0) {
      dispatch(addToCart(count))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 2500,
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please select product before adding to cart',
        showConfirmButton: false,
        timer: 2500,
      })
    }
    dispatch(reset())
  }

  return (
    <div className="right">
      <h4>SNEAKER COMPANY</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <div className="price-inline">
          <h2 className="price-tag">$125.00</h2>
          <h5 className="discount-tag">50%</h5>
        </div>
        <div>
          <h5 className="before-discount">$250.00</h5>
        </div>
      </div>
      <div className="cart-container">
        <div className="counter">
          <div className="decrement" onClick={() => dispatch(decrement())}>
            <IconMinus />
          </div>
          <div className="number">{count}</div>
          <div className="increment" onClick={() => dispatch(increment())}>
            <IconPlus />
          </div>
        </div>
        <div className="addToCartBtn">
          <button onClick={() => clickCart()}>
            <IconCart className="btn-cart-svg" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightSection
