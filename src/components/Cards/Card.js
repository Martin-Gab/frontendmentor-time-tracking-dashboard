// ============================
// ==== Card Sub-Component ====
// ============================

// ======================
// ==== Local Import ====
// ======================
import workIcon from '../../assets/images/icon-work.svg';

const Card = () => (
  <div className="card">
    <div className="card-icon">
      <img src={workIcon} alt="Work Icon" className="card-icon__picture" />
    </div>
    <div className="card-content">
      <div className="top">
        <h2 className="top__title">Work</h2>
        <div className="top__menu" />
      </div>
      <div className="bottom">
        <div className="bottom__hours">32hrs</div>
        <div className="bottom__before">Last Week - 36hrs</div>
      </div>
    </div>
  </div>
);

export default Card;
