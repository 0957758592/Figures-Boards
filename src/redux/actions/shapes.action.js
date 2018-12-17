import { shapeConstant } from "../constants";

export const setShapes = shapesList => dispatch => {
  dispatch({
    type: shapeConstant.SET_SHAPES,
    payload: shapesList
  });
};

export const moveShape = (shapeId, positionX, positionY) => dispatch => {
  dispatch({
    type: shapeConstant.MOVE_SHAPE,
    payload: { shapeId, positionX, positionY }
  });
};

export const dragShape = (
  shapeId,
  positionX,
  positionY,
  currentPlace
) => dispatch => {
  dispatch({
    type: shapeConstant.DRAG_SHAPE,
    payload: { shapeId, positionX, positionY, currentPlace }
  });
};

export const dropShape = (
  shapeId,
  positionX,
  positionY,
  currentPlace
) => dispatch => {
  dispatch({
    type: shapeConstant.DROP_SHAPE,
    payload: { shapeId, positionX, positionY, currentPlace }
  });
};
