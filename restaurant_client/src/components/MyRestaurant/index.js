import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import ShowDetailModal from "../ShowDetailModal";
import EditModal from "../EditModal";
import AddModal from "../AddModal";
import { GrChapterAdd } from "react-icons/gr";
import { BiWrench } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

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
      <div className="grid grid-cols-4 px-7">
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
                userId={res.user_id}
              />
              <div className="flex justify-between">
                <button
                  className="-translate-y-12 translate-x-[25px] p-2 shadow-xl text-center text-2xl text-white bg-green-400 rounded-lg hover:bg-green-300 "
                  onClick={() => handleEdit(res)}
                >
                  <BiWrench />
                </button>
                <button
                  className="-translate-y-12 p-2 -translate-x-[50px] shadow-xl text-center text-2xl text-white bg-red-400 rounded-lg hover:bg-red-300"
                  onClick={() => deleteRestaurant(res.id, idx)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))}
      </div>
      {restaurantSelected && <ShowDetailModal />}
      {restaurantSelected && <EditModal data={restaurantSelected} />}
      <AddModal />
      <button
        className="fixed bottom-20 right-20 text-5xl p-4 border rounded-full shadow-md"
        onClick={handleAdd}
      >
        <GrChapterAdd />
      </button>
    </>
  );
};

export default MyRestaurant;
