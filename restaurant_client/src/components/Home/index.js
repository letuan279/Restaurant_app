import { useEffect, useContext } from "react";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import ShowDetailModal from "../ShowDetailModal";

const Home = () => {
  const { restaurants, getRestaurants } = useContext(RestaurantContext);

  useEffect(getRestaurants, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {restaurants &&
          restaurants.map((res, idx) => (
            <div className="mt-4 p-8" key={idx}>
              <Restaurant
                idx={idx}
                name={res.name}
                description={res.description}
                address={res.address}
                image={res.image}
              />
            </div>
          ))}
      </div>
      <ShowDetailModal />
    </>
  );
};

export default Home;
