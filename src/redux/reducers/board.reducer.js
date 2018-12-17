const initialState = {
  shapes: [],
  currentBoard: {
    id: '',
    name: ''
  },
  droppable: true
};

export const boardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
