// ============================
// ==== Card Sub-Component ====
// ============================

// ======================
// ==== Local Import ====
// ======================
import workIcon from '../../assets/images/icon-work.svg';

const Card = ({ data }) => {
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
          <div className="bottom__hours">{`${data.timeframes.weekly.current}hrs`}</div>
          <div className="bottom__before">{`Last Week - ${data.timeframes.weekly.previous}hrs`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
