import { createContext } from "react";

const UserContext = createContext({
  email: "",
  pass: "",
  passTwo: "",
});

export default UserContext;