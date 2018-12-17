import { combineReducers } from "redux";
import { shapeReducer } from "./shape.reducer";
import { boardReducer } from "./board.reducer";
import { routesReducer } from "./routes.reducer";

export const rootReducer = combineReducers({
  shapes: shapeReducer,
  boards: boardReducer,
  routes: routesReducer
});
