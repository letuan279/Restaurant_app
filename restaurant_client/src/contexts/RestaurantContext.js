import { createContext, useState } from "react";
import { apiURL } from "./constants";
import axios from "axios";

export const RestaurantContext = createContext();

const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [myRestaurants, setMyRestaurants] = useState([]);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [restaurantSelected, setRestaurantSelected] = useState(null);

  const getRestaurants = async () => {
    try {
      const response = await axios.get(`${apiURL}/get-restaurants`);
      // console.log(response.data);
      if (response.data.status === 200) {
        // console.log(response.data.restaurants);
        setRestaurants(response.data.restaurants);
      } else alert(response.data);
    } catch (e) {
      alert(e);
    }
  };

  const getMyRestaurants = async () => {
    try {
      const response = await axios.get(`${apiURL}/get-restaurant`);
      // console.log(response.data);
      if (response.data.status === 200) {
        // console.log(response.data.restaurants);
        setMyRestaurants(response.data.restaurants);
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
        setMyRestaurants(
          myRestaurants.filter((r, i) =>
            r.id === newRestaurant.id ? newRestaurant : r
          )
        );
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
      setMyRestaurants(
        myRestaurants.filter((restaurant, index) => index !== idx)
      );
    } catch (e) {
      alert(e);
    }
  };

  const contextData = {
    getRestaurants,
    getMyRestaurants,
    restaurants,
    myRestaurants,
    setMyRestaurants,
    setRestaurants,
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
  };

  return (
    <RestaurantContext.Provider value={contextData}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
