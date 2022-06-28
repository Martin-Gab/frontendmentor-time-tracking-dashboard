// ==============================
// ==== Perso Card Component ====
// ==============================

// ======================
// ==== Local Import ====
// ======================
import './perso-card.scss';
import picture from '../../assets/images/image-jeremy.png';

const PersoCard = () => (
  <div className="perso-card">
    <div className="infos">
      <img src={picture} alt="Jeremy's avatar" className="infos__picture" />
      <p className="infos__name"><span>Report for</span>Jeremy Robson</p>
    </div>
    <div className="selection">
      <div className="selection__item">Daily</div>
      <div className="selection__item--selected">Weekly</div>
      <div className="selection__item">Monthly</div>
    </div>
  </div>
);

export default PersoCard;
