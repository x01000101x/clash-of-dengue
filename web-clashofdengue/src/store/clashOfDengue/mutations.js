export const setToggleMateri = (state, value) => {
  state.toggleMateri = value;
};
export const setCurrentIndex = (state, index) => {
  state.currentIndex = index;
};
export const setCursorPosition = (state, { x, y }) => {
  state.cursorX = x;
  state.cursorY = y;
};
export const addImage = (state, imageUrl) => {
  state.images.push(imageUrl);
};
export const percentCrusor = (state, payload) => {
  state.percentCrusor = {
    x: payload.x,
    y: payload.y,
  };
};
