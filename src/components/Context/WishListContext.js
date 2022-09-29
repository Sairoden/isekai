import { createContext, useState, useEffect } from "react";

const addWishListItem = (wishListItems, productToAdd) => {
  const existingWishListItem = wishListItems.find(
    wishListItem => wishListItem.id === productToAdd.id
  );

  if (existingWishListItem)
    return wishListItems.map(wishListItem =>
      wishListItem.id === productToAdd.id ? { ...wishListItem } : wishListItem
    );

  return [...wishListItems, { ...productToAdd }];
};

export const WishListContext = createContext({
  wishListItems: [],
  addItemToWishList: () => {},
});

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);

  const addItemToWishList = productToAdd => {
    setWishListItems(addWishListItem(wishListItems, productToAdd));
  };

  const value = { wishListItems, addItemToWishList };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};
