import { useContext, useEffect, useState } from "react";
import srcImage from "../../../src/images/index.jpeg";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import { GoLocation } from "react-icons/go";

const Restaurant = ({ id, idx, name, description, address, image }) => {
  const { setIsShowDetailModal, setRestaurantSelected, getNickNameByResId } =
    useContext(RestaurantContext);

  const [username, setUsername] = useState("");

  // console.log(username);

  useEffect(async () => {
    const { name } = await getNickNameByResId(id);
    setUsername(name);
  }, [id]);

  const handleMore = () => {
    setRestaurantSelected({
      name,
      description,
      address,
      image,
    });

    setIsShowDetailModal(true);
  };

  // console.log(image);

  return (
    <div className="flex flex-col max-w-max b7g-white rounded-lg border border-gray-200 shadow-md pb-2">
      {/* <img className="rounded-t-lg" src={srcImage} alt="" /> */}
      {image && (
        <div className={`rounded-t-lg w-80 h-52`}>
          <img
            className="w-full h-full rounded-t-lg"
            src={`http://127.0.0.1:8000/${image}`}
            alt=""
          />
        </div>
      )}
      <div className="w-fit h-fit p-2 mt-2 rounded-lg bg-green-400 text-white relative left-1/2 -translate-x-1/2">
        {username}
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name.length > 20 ? `${name.slice(0, 20)}...` : name}
        </h5>
        <p className="mb-3 font-normal text-gray-500 text-base">
          {description.length > 30
            ? `${description.slice(0, 30)}...`
            : description}
        </p>
        <p className="font-normal text-gray-600 flex gap-3">
          <GoLocation size={"25px"} color="red" />{" "}
          {address.length > 20 ? `${address.slice(0, 20)}...` : address}
        </p>
      </div>
      <button
        onClick={handleMore}
        className="p-2 w-2/5 rounded-lg text-white bg-blue-500 relative left-1/2 -translate-x-1/2"
      >
        More detail
      </button>
    </div>
  );
};

export default Restaurant;
