const Restaurant = ({ idx, name, description, address, image }) => {
  return (
    <>
      <h2>
        {idx + 1} . {name}
      </h2>
      <h2>{description}</h2>
      <h2>{address}</h2>
      <h2>{image}</h2>
    </>
  );
};

export default Restaurant;
