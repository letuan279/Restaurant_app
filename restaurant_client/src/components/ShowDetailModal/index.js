import { useContext } from "react";
import ReactDOM from "react-dom";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import "../Modal/index.css";
import srcImage from "../../../src/300px-Golden_tabby_and_white_kitten_n01.jpg";

const ShowDetailModal = () => {
  const { isShowDetailModal, setIsShowDetailModal, restaurantSelected } =
    useContext(RestaurantContext);

  return isShowDetailModal
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
                  onClick={() => setIsShowDetailModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover w-full h-96 rounded-t-lg"
                  src={srcImage}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tigt text-gray-900 dark:text-white">
                    {restaurantSelected.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {restaurantSelected.description}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {restaurantSelected.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default ShowDetailModal;
