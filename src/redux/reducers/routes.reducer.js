import { routesConstatnt } from "../constants";
const initialState = {
  routesApi: []
};

export const routesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case routesConstatnt.SET_ROUTES:
      return { routesApi: payload };
    default:
      return state;
  }
};
