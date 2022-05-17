import { createContext, useState, useReducer } from "react";
import { apiURL } from "./constants";
import axios from "axios";
import { RestaurantReducer } from "../reducer/RestaurantReducer";

export const RestaurantContext = createContext();

const RestaurantContextProvider = ({ children }) => {
  const [restaurantState, dispatch] = useReducer(RestaurantReducer, {
    restaurantLoading: true,
    restaurantList: [],
  });

  // console.log(restaurantState);

  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [restaurantSelected, setRestaurantSelected] = useState(null);

  const getRestaurants = async () => {
    try {
      const response = await axios.get(`${apiURL}/get-restaurants`);
      // console.log(response.data);
      if (response.data.status === 200) {
        dispatch({
          type: "GET_RESTAURANT_SUCCESS",
          payload: response.data.restaurants,
        });
      } else alert(response.data);
    } catch (e) {
      dispatch({
        type: "GET_RESTAURANT_FAIL",
      });
    }
  };

  const getMyRestaurants = async () => {
    try {
      const response = await axios.get(`${apiURL}/get-restaurant`);
      // console.log(response.data);
      if (response.data.status === 200) {
        dispatch({
          type: "GET_RESTAURANT_SUCCESS",
          payload: response.data.restaurants,
        });
      } else alert(response.data);
    } catch (e) {
      dispatch({
        type: "GET_RESTAURANT_FAIL",
      });
    }
  };

  const addRestaurant = async (formData) => {
    try {
      const response = await axios.post(`${apiURL}/add-restaurant`, formData);
      if (response.data.status === 200) {
        const newRestaurant = response.data.restaurant;
        dispatch({
          type: "CREATED_NEW_RESTAURANT",
          payload: newRestaurant,
        });
      } else alert(response.data);
    } catch (e) {
      alert(e);
    }
  };

  const updateRestaurant = async (id, formUpdate) => {
    try {
      const response = await axios.put(
        `${apiURL}/update-restaurant/${id}`,
        formUpdate
      );
      // console.log(response.data);
      if (response.data.status === 200) {
        // console.log(response.data.restaurant);
        const newRestaurant = response.data.restaurant;
        dispatch({
          type: "UPDATE_RESTAURANT",
          payload: newRestaurant,
        });
      } else alert(response.data);
    } catch (e) {
      alert(e);
    }
  };

  const deleteRestaurant = async (restaurantId, idx) => {
    try {
      const response = await axios.delete(
        `${apiURL}/delete-restaurant/${restaurantId}`
      );
      // console.log(response.data);
      alert(response.data.message);
      dispatch({
        type: "DELETE_RESTAURANT",
        payload: response.data.restaurant,
      });
    } catch (e) {
      alert(e);
    }
  };

  const contextData = {
    getMyRestaurants,
    getRestaurants,
    restaurantState,
    dispatch,
    updateRestaurant,
    deleteRestaurant,
    isShowDetailModal,
    setIsShowDetailModal,
    isShowAddModal,
    setIsShowAddModal,
    isShowEditModal,
    setIsShowEditModal,
    restaurantSelected,
    setRestaurantSelected,
    isAddModal,
    setIsAddModal,
    addRestaurant,
  };

  return (
    <RestaurantContext.Provider value={contextData}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
