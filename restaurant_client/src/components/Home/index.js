import { useEffect, useContext } from "react";
import NavBar from "../NavBar";
import Restaurant from "../Restaurant";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import ShowDetailModal from "../ShowDetailModal";

const Home = () => {
  const {
    restaurantState: { restaurantList },
    getRestaurants,
  } = useContext(RestaurantContext);

  useEffect(getRestaurants, []);

  // console.log(restaurantList);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 px-7">
        {restaurantList &&
          restaurantList.map((res, idx) => (
            <div className="mt-4 p-6" key={idx}>
              <Restaurant
                idx={idx}
                name={res.name}
                description={res.description}
                address={res.address}
                image={res.image}
                id={res.id}
                userId={res.user_id}
              />
            </div>
          ))}
      </div>
      <ShowDetailModal />
    </>
  );
};

export default Home;
