import React, { useState, useContext, useEffect } from "react";
import ApiContext from "../Context/ApiContext";

function Subedit() {
  const { editif, userListData, setUserListData, editflag, seteditFlag } = useContext(ApiContext);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleCompleted = (e)=>{
    setCompleted(e.target.value==="true");
  }

  const saveHandler = (id) => {
    const editedUserList = userListData.map((user) => {
      if (user.id === id) {
        return { ...user, title: title, completed:completed };
      }
      return user;
    });
    console.log("VRSd", editedUserList);
    setUserListData(editedUserList);
    seteditFlag(false);
  };
  
  useEffect(()=>{
    if(editif!=null){
        const value = userListData.filter((user) => user.id === Number(editif));
        setTitle(value[0].title);
        setCompleted(value[0].completed)
    }
  },[userListData,editif])

  return (
    <>
      {editflag ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="radio"
            checked={completed === true}
            value={true}
            onChange={handleCompleted}
          />
          True
          <input
            type="radio"
            checked={completed === false}
            value={false}
            onChange={handleCompleted}
          />
          False
          <button onClick={() => saveHandler(editif)}>Save</button>
        </>
      ) : null}
    </>
  );
}

export default Subedit;
