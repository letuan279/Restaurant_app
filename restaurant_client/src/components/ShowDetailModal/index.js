import { useContext } from "react";
import ReactDOM from "react-dom";
import { RestaurantContext } from "../../contexts/RestaurantContext";
import "../Modal/index.css";
import { GoLocation } from "react-icons/go";

const ShowDetailModal = () => {
  const { isShowDetailModal, setIsShowDetailModal, restaurantSelected } =
    useContext(RestaurantContext);

  // console.log(restaurantSelected);

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
            <div className="modal max-w-[1200px]">
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
              <div className="flex items-center bg-white rounded-lg border shadow-md object-cover">
                <img
                  className="object-cover w-full h-96 rounded-t-lg"
                  src={`http://127.0.0.1:8000/${restaurantSelected.image}`}
                  alt=""
                />
                <div className="w-[450px] flex flex-col p-4 leading-normal break-words ">
                  <h5 className="mb-2 text-2xl tracking-tigt text-gray-900 font-bold">
                    {restaurantSelected.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-500 text-base">
                    {restaurantSelected.description}
                  </p>
                  <p className="font-normal text-gray-600 flex gap-3">
                    <GoLocation size={"25px"} color="red" />{" "}
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
