import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
} from './CartSlice';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const quantity = useSelector(selectCartQuantity);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  return (
    <main className="container cart-page">
      <div className="page-heading">
        <div className="eyebrow">YOUR GREEN COLLECTION</div>
        <h1>Shopping Cart</h1>
        <p>Review your plants before they find their new home.</p>
      </div>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Items in your cart">
          <h2>Your plants <span className="muted">({quantity})</span></h2>
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon" aria-hidden="true">♧</div>
              <h3>Your cart is growing... just not yet!</h3>
              <p>Start by finding a plant that feels like home.</p>
              <button type="button" className="button" onClick={() => onNavigate('plants')}>
                Browse Plants
              </button>
            </div>
          ) : (
            items.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="eyebrow">{item.category}</div>
                  <h3>{item.name}</h3>
                  <p>Unit price: {money(item.price)}</p>
                  <button type="button" className="text-button remove" onClick={() => dispatch(removeItem(item.id))}>
                    Remove
                  </button>
                </div>
                <div className="cart-item-controls">
                  <strong>{money(item.price * item.quantity)}</strong>
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                </div>
              </article>
            ))
          )}
          <button type="button" className="text-button continue-link" onClick={() => onNavigate('plants')}>
            ← Continue Shopping
          </button>
        </section>

        <aside className="order-summary">
          <div className="eyebrow">YOUR ORDER</div>
          <h2>Order Summary</h2>
          <div className="summary-line"><span>Total items</span><strong>{quantity}</strong></div>
          <div className="summary-line"><span>Subtotal</span><strong>{money(total)}</strong></div>
          <div className="summary-line total-line"><span>Total</span><strong>{money(total)}</strong></div>
          <button
            type="button"
            className="button checkout-button"
            onClick={() => setCheckoutMessage('Coming Soon! Checkout will be available shortly.')}
          >
            Checkout →
          </button>
          {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
          <p className="summary-note">Every plant is a fresh beginning.</p>
        </aside>
      </div>
    </main>
  );
}
