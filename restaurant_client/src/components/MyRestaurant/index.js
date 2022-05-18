import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import ShowDetailModal from "../ShowDetailModal";
import EditModal from "../EditModal";
import AddModal from "../AddModal";
import { GrChapterAdd } from "react-icons/gr";

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
                id={res.id}
              />
              <div className="flex justify-between">
                <button
                  className="p-2 shadow-xl text-center text-2xl text-white bg-green-400 rounded-b-lg hover:bg-green-300 "
                  onClick={() => handleEdit(res)}
                >
                  Edit
                </button>
                <button
                  className="p-2 shadow-xl text-center text-2xl text-white bg-red-400 rounded-b-lg hover:bg-red-300"
                  onClick={() => deleteRestaurant(res.id, idx)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      {restaurantSelected && <ShowDetailModal />}
      {restaurantSelected && <EditModal data={restaurantSelected} />}
      <AddModal />
      <button
        className="fixed bottom-20 right-20 text-6xl p-4 border rounded-full shadow-md"
        onClick={handleAdd}
      >
        <GrChapterAdd />
      </button>
    </>
  );
};

export default MyRestaurant;
