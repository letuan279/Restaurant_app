import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import "../Modal/index.css";
const AddModal = () => {
  const { isAddModal, setIsAddModal, addRestaurant } =
    useContext(RestaurantContext);

  const [file, setFile] = useState(null);

  const [newRes, setNewRes] = useState({
    name: "",
    description: "",
    address: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newRes.name);
    formData.append("description", newRes.description);
    formData.append("address", newRes.address);
    formData.append("image", file);

    addRestaurant(formData);

    setIsAddModal(false);
  };

  return isAddModal
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setIsAddModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    value={newRes.name}
                    onChange={(e) =>
                      setNewRes({ ...newRes, name: e.target.value })
                    }
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
                  <textarea
                    value={newRes.description}
                    onChange={(e) =>
                      setNewRes({ ...newRes, description: e.target.value })
                    }
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
                    value={newRes.address}
                    onChange={(e) =>
                      setNewRes({ ...newRes, address: e.target.value })
                    }
                    type="text"
                    id="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="image"
                >
                  Upload Image
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  type="file"
                  id="image"
                ></input>
                {/* <div className="mb-6">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Image
                  </label>
                  <input
                    value={newRes.image}
                    onChange={(e) =>
                      setNewRes({ ...newRes, image: e.target.value })
                    }
                    type="text"
                    id="image"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div> */}
                <button
                  onClick={handleAdd}
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default AddModal;
