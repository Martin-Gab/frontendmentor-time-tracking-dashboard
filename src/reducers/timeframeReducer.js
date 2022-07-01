// =======================================
// === Reducer for timeframe selection ===
// =======================================

const initialState = {
  dailySelected: true,
  weeklySelected: false,
  monthlySelected: false,
};

const timeframeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default timeframeReducer;
