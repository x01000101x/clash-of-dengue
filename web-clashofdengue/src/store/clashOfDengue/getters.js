export const getToggleMateri = (state) => state.toggleMateri;
export const getCurrentImage = (state) => {
  return state.images[state.currentIndex];
};
export const getCursorPosition = (state) => {
  return { x: state.cursorX, y: state.cursorY };
};

export const getCursorPercent = (state) => {
  return state.percentCrusor;
};
