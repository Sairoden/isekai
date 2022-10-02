import { useEffect } from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  user: false,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
