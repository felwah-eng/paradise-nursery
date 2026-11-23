import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { selectCartQuantity } from './CartSlice';
import './App.css';

function Header({ currentPage, onNavigate }) {
  const cartCount = useSelector(selectCartQuantity);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <button type="button" className="brand" onClick={() => onNavigate('home')} aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span><strong>Paradise</strong><small>NURSERY</small></span>
        </button>
        <nav aria-label="Main navigation">
          <button type="button" className={currentPage === 'home' ? 'nav-active' : ''} onClick={() => onNavigate('home')}>Home</button>
          <button type="button" className={currentPage === 'plants' ? 'nav-active' : ''} onClick={() => onNavigate('plants')}>Plants</button>
          <button type="button" className={`cart-nav ${currentPage === 'cart' ? 'nav-active' : ''}`} onClick={() => onNavigate('cart')}>
            <span aria-hidden="true">▣</span> Cart <span className="cart-badge" aria-label={`${cartCount} items in cart`}>{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function LandingPage({ onNavigate }) {
  return (
    <>
      <main className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-eyebrow">A GREENER WAY TO LIVE</div>
          <h1>Bring nature <em>home.</em></h1>
          <p>Discover thoughtfully chosen houseplants to brighten your space, lift your mood, and make every day a little greener.</p>
          <button type="button" className="button hero-cta" onClick={() => onNavigate('plants')}>Get Started <span aria-hidden="true">↗</span></button>
          <div className="hero-bottom"><span>ROOTED IN NATURE</span><span>GROWN WITH LOVE</span></div>
        </div>
      </main>
      <AboutUs />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header currentPage={currentPage} onNavigate={navigate} />
      {currentPage === 'home' && <LandingPage onNavigate={navigate} />}
      {currentPage === 'plants' && <ProductList />}
      {currentPage === 'cart' && <CartItem onNavigate={navigate} />}
      <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery <span>Grow beautifully.</span></footer>
    </>
  );
}
