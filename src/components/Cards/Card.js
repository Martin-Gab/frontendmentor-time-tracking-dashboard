// ============================
// ==== Card Sub-Component ====
// ============================

// ======================
// ==== Local Import ====
// ======================
import { useSelector } from "react-redux";

const Card = ({ data }) => {
  // === Function to apply the right background color to the right card ===
  const cardCssClass = (cardTitle) => {
    let cssClass;
    switch (cardTitle) {
      case 'Work':
        cssClass = "card card--work";
        break;

      case 'Play':
        cssClass = "card card--play";
        break;

      case 'Study':
        cssClass = "card card--study";
        break;

      case 'Exercise':
        cssClass = "card card--exercise";
        break;

      case 'Social':
        cssClass = "card card--social";
        break;

      case 'Self Care':
        cssClass = "card card--selfcare";
        break;
    
      default:
        break;
    }
    return cssClass;
  }

  // === Values from the timeframeReducer ===
  const dailySelected = useSelector((state) => state.timeframe.dailySelected);
  const weeklySelected = useSelector((state) => state.timeframe.weeklySelected);
  const monthlySelected = useSelector((state) => state.timeframe.monthlySelected);

  // === Function to fetch the right values from data according to the selected timeframe ===
  // === Current timeframe ===
  const selectedTimeframeCurrent = () => {
    if (dailySelected) {
      return data.timeframes.daily.current;
    }
    else if (weeklySelected) {
      return data.timeframes.weekly.current;
    }
    else if (monthlySelected) {
      return data.timeframes.monthly.current;
    }
  }

  // === Previous timeframe ===
  const selectedTimeframePrevious = () => {
    if (dailySelected) {
      return data.timeframes.daily.previous;
    }
    else if (weeklySelected) {
      return data.timeframes.weekly.previous;
    }
    else if (monthlySelected) {
      return data.timeframes.monthly.previous;
    }
  }

  // === Function to display correct timeframe text content on card ===
  const timeframeTextContent = () => {
    if (dailySelected) {
      return 'Day';
    }
    else if (weeklySelected) {
      return 'Week';
    }
    else if (monthlySelected) {
      return 'Month';
    }
  }

  return (
    <div className={cardCssClass(data.title)}>
      <div className="card-icon">
        <img src={data.icon} alt="Work Icon" className="card-icon__picture" />
      </div>
      <div className="card-content">
        <div className="top">
          <h2 className="top__title">{data.title}</h2>
          <div className="top__menu" />
        </div>
        <div className="bottom">
          <div className="bottom__hours">{`${selectedTimeframeCurrent()}hrs`}</div>
          <div className="bottom__before">{`Last ${timeframeTextContent()} - ${selectedTimeframePrevious()}hrs`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
