import srcImage from "../../../src/300px-Golden_tabby_and_white_kitten_n01.jpg";

const ShowDetail = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full h-96 rounded-t-lg"
        src={srcImage}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tigt text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.address}
        </p>
      </div>
    </div>
  );
};

export default ShowDetail;
