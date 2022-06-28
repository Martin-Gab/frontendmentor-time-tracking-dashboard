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

const Cards = () => (
  <div className="cards">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

export default Cards;
