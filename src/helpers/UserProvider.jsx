import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
      email: "",
      pass: "",
      passTwo: "",
    });
  
    return (
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserProvider;