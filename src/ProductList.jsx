import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';
import { plantCategories } from './plants';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant, category) => {
    if (!addedIds.has(plant.id)) dispatch(addItem({ ...plant, category }));
  };

  return (
    <main className="container catalog">
      <div className="page-heading">
        <div className="eyebrow">HAND-PICKED FOR YOUR HOME</div>
        <h1>Find your next favorite plant.</h1>
        <p>From easy-care classics to lush tropical leaves, there is a little green for everyone.</p>
      </div>
      {plantCategories.map((category) => (
        <section key={category.name} className="plant-section" aria-label={category.name}>
          <div className="section-heading">
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <span className="plant-count">6 plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const alreadyAdded = addedIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-photo">
                    <img src={plant.image} alt={plant.name} loading="lazy" />
                    <span className="plant-tag">{category.name}</span>
                  </div>
                  <div className="plant-content">
                    <h3>{plant.name}</h3>
                    <div className="plant-actions">
                      <strong>{money(plant.price)}</strong>
                      <button
                        type="button"
                        className="button button-small"
                        disabled={alreadyAdded}
                        onClick={() => handleAddToCart(plant, category.name)}
                      >
                        {alreadyAdded ? 'Added to Cart ✓' : 'Add to Cart +'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
