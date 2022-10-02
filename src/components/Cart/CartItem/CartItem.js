const CartItem = ({ cartItem, setTotalPrice }) => {
  const { name, quantity, photo, price } = cartItem;

  return (
    <div>
      <img src={photo} alt={name} />
      <div>{name}</div>
      <div>{quantity}</div>
      <div>₱ {price}</div>
    </div>
  );
};

export default CartItem;
