import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../../contexts/constants";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import useModal from "../../custom/useModal";
import Modal from "../Modal";

const MyRestaurant = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiURL}/get-restaurant`);
        // console.log(response.data);
        if (response.data.status === 200) {
          // console.log(response.data.restaurants);
          setAllRestaurant(response.data.restaurants);
        } else alert(response.data);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  }, []);

  const handleEdit = async (restaurantId, idx) => {
    toggle();
  };

  const handleDelete = async (restaurantId, idx) => {
    try {
      const response = await axios.delete(
        `${apiURL}/delete-restaurant/${restaurantId}`
      );
      // console.log(response.data);
      alert(response.data.message);
      setAllRestaurant(
        allRestaurant.filter((restaurant, index) => index !== idx)
      );
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <NavBar />
      {allRestaurant &&
        allRestaurant.map((res, idx) => (
          <div key={res.id}>
            <Restaurant
              idx={idx}
              name={res.name}
              description={res.description}
              address={res.address}
              image={res.image}
            />
            <button onClick={() => handleEdit(res.id, idx)}>🔧</button>
            <Modal isShowing={isShowing} hide={toggle} />
            <button onClick={() => handleDelete(res.id, idx)}>🗑️</button>
          </div>
        ))}
    </>
  );
};

export default MyRestaurant;
