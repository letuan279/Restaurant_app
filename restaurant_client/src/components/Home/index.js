import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../../contexts/constants";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`${apiURL}/get-restaurants`);
      // console.log(response.data);
      if (response.data.status === 200) {
        // console.log(response.data.restaurants);
        setAllRestaurants(response.data.restaurants);
      } else alert(response.data);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <>
      <NavBar />
      {allRestaurants &&
        allRestaurants.map((res, idx) => (
          <div key={idx}>
            <Restaurant
              idx={idx}
              name={res.name}
              description={res.description}
              address={res.address}
              image={res.image}
            />
          </div>
        ))}
    </>
  );
};

export default Home;
