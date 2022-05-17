export const RestaurantReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_RESTAURANT_SUCCESS":
      return {
        ...state,
        restaurantLoading: false,
        restaurantList: payload,
      };
    case "GET_RESTAURANT_FAIL":
      return {
        ...state,
        restaurantLoading: false,
        restaurantList: [],
      };
    case "CREATED_NEW_RESTAURANT":
      return {
        ...state,
        restaurantLoading: false,
        restaurantList: [...state.restaurantList, payload],
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurantLoading: false,
        restaurantList: state.restaurantList.filter(
          (restaurant) => restaurant.id !== payload.id
        ),
      };
    case "UPDATE_RESTAURANT":
      const newRestaurantList = state.restaurantList.map((restaurant) =>
        restaurant.id === payload.id ? payload : restaurant
      );
      return {
        ...state,
        restaurantLoading: false,
        restaurantList: newRestaurantList,
      };
    default:
      return state;
  }
};
