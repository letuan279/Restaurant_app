import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import ShowDetailModal from "../ShowDetailModal";
import EditModal from "../EditModal";

const MyRestaurant = () => {
  const {
    myRestaurants,
    getMyRestaurants,
    deleteRestaurant,
    setRestaurantSelected,
    setIsShowEditModal,
    restaurantSelected,
  } = useContext(RestaurantContext);

  useEffect(getMyRestaurants, []);

  const handleEdit = (res) => {
    setRestaurantSelected(res);
    setIsShowEditModal(true);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {myRestaurants &&
          myRestaurants.map((res, idx) => (
            <div key={res.id} className="mt-4 p-8">
              <Restaurant
                idx={idx}
                name={res.name}
                description={res.description}
                address={res.address}
                image={res.image}
              />
              <button onClick={() => handleEdit(res)}>🔧</button>
              <button onClick={() => deleteRestaurant(res.id, idx)}>🗑️</button>
            </div>
          ))}
      </div>
      {restaurantSelected && <ShowDetailModal />}
      {restaurantSelected && <EditModal data={restaurantSelected} />}
    </>
  );
};

export default MyRestaurant;
