import { shapeConstant } from "../constants";

const initialState = {
  shapeList: [],
  currentShape: {
    id: "",
    positionX: "",
    positionY: "",
    currentPlace: ""
  },
  draggable: true
};

export const shapeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shapeConstant.SET_SHAPES:
      return Object.assign({}, { ...state }, { shapeList: payload });
    default:
      return state;
  }
};
