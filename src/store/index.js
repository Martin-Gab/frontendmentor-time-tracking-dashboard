// =========================
// === Store for our App ===
// =========================

// ======================
// === Package Import ===
// ======================
import { configureStore } from '@reduxjs/toolkit';

// ======================
// === Reducer Import ===
// ======================
import timeframeReducer from '../reducers/timeframeReducer';

const reducer = {
  timeframe: timeframeReducer,
};

const store = configureStore({ reducer });

export default store;
