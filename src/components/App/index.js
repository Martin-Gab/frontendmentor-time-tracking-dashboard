// =======================
// ==== App Component ====
// =======================

// ======================
// ==== Local Import ====
// ======================
import './app.scss';

// ============================
// ==== Components Imports ====
// ============================
import PersoCard from '../PersoCard';
import Cards from '../Cards';

const App = () => (
  <div className="app">
    <PersoCard />
    <Cards />
  </div>
);

export default App;
