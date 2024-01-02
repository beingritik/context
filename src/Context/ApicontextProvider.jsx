import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Apicontext from "./ApiContext";

const ApicontextProvider = ({ children }) => {
  let url = import.meta.env.VITE_URL;
  const userList = useFetch(url);
  const [editif, seteditif] = useState(null);
  const [userListData, setUserListData] = useState(userList);
  const [editflag, seteditFlag] = useState(false);

  useEffect(() => {
    if (userList.length > 0) {
      setUserListData(userList);
    }
  }, [userList]);
  return (
    <Apicontext.Provider
      value={{
        userListData,
        editif,
        editflag,
        seteditif,
        setUserListData,
        seteditFlag,
      }}
    >
      {children}
    </Apicontext.Provider>
  );
};

export default ApicontextProvider;
