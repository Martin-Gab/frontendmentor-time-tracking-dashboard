// =======================================
// === Reducer for timeframe selection ===
// =======================================

// =======================
// === Actions Imports ===
// =======================
import { TOGGLE_SELECTED_TIMEFRAME } from "../actions/timeframe";

// =================================
// === Initial State declaration ===
// =================================
const initialState = {
  dailySelected: true,
  weeklySelected: false,
  monthlySelected: false,
};

const timeframeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECTED_TIMEFRAME:
      switch (action.timeframe) {
        case 'daily':
          return {
            ...state,
            dailySelected: true,
            weeklySelected: false,
            monthlySelected: false,
          }

        case 'weekly':
          return {
            ...state,
            dailySelected: false,
            weeklySelected: true,
            monthlySelected: false,
          }

        case 'monthly':
          return {
            ...state,
            dailySelected: false,
            weeklySelected: false,
            monthlySelected: true,
          }
      
        default:
      }
      break;

    default:
      return state;
  }
};

export default timeframeReducer;
