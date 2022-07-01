// =================================================
// === Actions regarding the timeframe selection ===
// =================================================

// ====================
// === Action Types ===
// ====================
export const TOGGLE_SELECTED_TIMEFRAME = 'TOGGLE_SELECTED_TIMEFRAME';

// =======================
// === Action Creators ===
// =======================
export const toggleSelectedTimeframe = (selectedTimeframe) => ({
  type: TOGGLE_SELECTED_TIMEFRAME,
  timeframe: selectedTimeframe,
});
