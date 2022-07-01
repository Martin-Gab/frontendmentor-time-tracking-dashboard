// ==============================
// ==== Perso Card Component ====
// ==============================

// ======================
// ==== Local Import ====
// ======================
import './perso-card.scss';
import picture from '../../assets/images/image-jeremy.png';

// ========================
// === Packages Imports ===
// ========================
import { useSelector, useDispatch } from 'react-redux';

// =======================
// === Actions Imports ===
// =======================
import { toggleSelectedTimeframe } from '../../actions/timeframe';

const PersoCard = () => {
  // === Hook to dispatch actions ===
  const dispatch = useDispatch();

  // === Values from the timeframeReducer ===
  const dailySelected = useSelector((state) => state.timeframe.dailySelected);
  const weeklySelected = useSelector((state) => state.timeframe.weeklySelected);
  const monthlySelected = useSelector((state) => state.timeframe.monthlySelected);

  return (
    <div className="perso-card">
      <div className="infos">
        <img src={picture} alt="Jeremy's avatar" className="infos__picture" />
        <p className="infos__name"><span>Report for</span>Jeremy Robson</p>
      </div>
      <div className="selection">

        <div
          className={dailySelected ? 'selection__item selection__item--selected' : 'selection__item'}
          onClick={() => {
            dispatch(toggleSelectedTimeframe('daily'));
          }}
        >
          Daily
        </div>

        <div
          className={weeklySelected ? 'selection__item selection__item--selected' : 'selection__item'}
          onClick={() => {
            dispatch(toggleSelectedTimeframe('weekly'));
          }}
        >
          Weekly
        </div>

        <div
          className={monthlySelected ? 'selection__item selection__item--selected' : 'selection__item'}
          onClick={() => {
            dispatch(toggleSelectedTimeframe('monthly'));
          }}
        >
          Monthly
        </div>

      </div>
    </div>
  );
};

export default PersoCard;
