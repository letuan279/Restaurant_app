import { useContext } from "react";
import srcImage from "../../../src/300px-Golden_tabby_and_white_kitten_n01.jpg";
import { RestaurantContext } from "../../contexts/RestaurantContext";

const Restaurant = ({ idx, name, description, address, image }) => {
  const { setIsShowDetailModal, setRestaurantSelected } =
    useContext(RestaurantContext);

  const handleMore = () => {
    setRestaurantSelected({
      name,
      description,
      address,
      image,
    });

    setIsShowDetailModal(true);
  };

  return (
    <div className="max-w-max b7g-white rounded-lg border border-gray-200 shadow-md pb-2">
      <img className="rounded-t-lg" src={srcImage} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-00">
          {description.length > 30
            ? `${description.slice(0, 30)}...`
            : description}
        </p>
      </div>
      <button
        onClick={handleMore}
        className="p-2 rounded-lg text-white bg-blue-500"
      >
        More detail
      </button>
    </div>
  );
};

export default Restaurant;
