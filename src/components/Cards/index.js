// =========================
// ==== Cards Component ====
// =========================

// ======================
// ==== Local Import ====
// ======================
import './cards.scss';

// ==============================
// ==== Sub-Component Import ====
// ==============================
import Card from './Card';

// =====================
// ==== Data Import ====
// =====================
import cardData from '../../data/data';

const Cards = () => (
  <div className="cards">
    {cardData.map((item) => (
      <Card key={item.id} data={item} />
    ))}
  </div>
);

export default Cards;
