import { useContext, useState } from "react";
import { RestaurantContext } from "../../contexts/RestaurantContext";

const EditForm = ({ data }) => {
  const { updateRestaurant } = useContext(RestaurantContext);

  const [editData, setEditData] = useState({
    name: data.name,
    description: data.description,
    address: data.address,
    image: data.image,
  });

  return (
    <form>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          value={editData.name}
          onChange={(e) => setEditData(e.target.value)}
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Description
        </label>
        <input
          value={editData.description}
          onChange={(e) => setEditData(e.target.value)}
          type="text"
          id="description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Address
        </label>
        <input
          value={editData.address}
          onChange={(e) => setEditData(e.target.value)}
          type="text"
          id="address"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      {/* <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="image"
      >
        Upload Image
      </label>
      <input
        value={}
        onChange={(e)=> setEditData()}
        className="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        type="file"
        id="image"
      ></input
        value={}
        onChange={(e)=> setEditData()}> */}
      <div className="mb-6">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Image
        </label>
        <input
          value={editData.image}
          onChange={(e) => setEditData(e.target.value)}
          type="text"
          id="image"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <button
        onClick={() => updateRestaurant(data.id, editData)}
        type="submit"
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
      </button>
    </form>
  );
};

export default EditForm;
