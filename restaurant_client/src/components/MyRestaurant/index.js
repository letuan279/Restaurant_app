import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import ShowDetailModal from "../ShowDetailModal";
import EditModal from "../EditModal";
import AddModal from "../AddModal";

const MyRestaurant = () => {
  const {
    restaurantState: { restaurantList },
    getMyRestaurants,
    deleteRestaurant,
    setRestaurantSelected,
    setIsShowEditModal,
    restaurantSelected,
    setIsAddModal,
  } = useContext(RestaurantContext);

  useEffect(getMyRestaurants, []);

  const handleEdit = (res) => {
    setRestaurantSelected(res);
    setIsShowEditModal(true);
  };

  const handleAdd = () => {
    setIsAddModal(true);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {restaurantList &&
          restaurantList.map((res, idx) => (
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
      <AddModal />
      <button className="fixed bottom-5 right-5" onClick={handleAdd}>
        create
      </button>
    </>
  );
};

export default MyRestaurant;
