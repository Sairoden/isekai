import "./FavoriteItem.css";

const FavoriteItem = ({ wishListItem }) => {
  const { name, quantity, photo, price } = wishListItem;

  return (
    <div>
      <img src={photo} alt={name} />
      <div>{name}</div>
      <div>{quantity}</div>
      <div>₱{price}</div>
    </div>
  );
};

export default FavoriteItem;
