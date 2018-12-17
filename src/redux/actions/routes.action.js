import { routesConstatnt } from "../constants";

export const setRoutes = routesApi => dispatch => {
  dispatch({
    type: routesConstatnt.SET_ROUTES,
    payload: routesApi
  });
};
