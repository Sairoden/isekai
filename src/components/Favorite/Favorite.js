import { useContext } from "react";
import { Link } from "react-router-dom";

import FavoriteItem from "./FavoriteItem/FavoriteItem";
import Footer from "../Footer/Footer";

import { WishListContext } from "../Context/WishListContext";

const Favorite = () => {
  const { wishListItems } = useContext(WishListContext);

  return (
    <>
      {wishListItems.length ? (
        wishListItems.map(item => (
          <FavoriteItem key={item.id} wishListItem={item} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Empty WishList</h1>
          <Link to="/collections/anime-clothing-apparel">
            <h2>Catch some pokemons!</h2>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Favorite;
