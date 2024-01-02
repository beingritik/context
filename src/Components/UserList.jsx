import { useState, useContext } from "react";
import ApiContext from "../Context/ApiContext";
import Edit from "./Edit";
import { Link } from "react-router-dom";


function UserList() {
  const { userListData, seteditFlag } = useContext(ApiContext);
  let {seteditif} = useContext(ApiContext);
  const [edit,setedit] = useState(false)
  const editHandler = (id)=>{
    setedit(true)
    seteditif(id)
    seteditFlag(true)
  }


  const viewItem = ()=>{
  }
  return (
    <>
    {edit ? <Edit/> : "no comp"}
        <h1>Users are</h1>
        {userListData &&
          userListData.map((user) => (
            <ul key={user.id}>
              <li>{user.title}</li>
              <li>{JSON.stringify(user.completed)}</li>
              <button onClick={()=> editHandler(user.id)}>Edit</button>
              <Link to ={`/user/${user.id}`}><button>View</button></Link>
            </ul>
          ))}
    </>
  );
}

export default UserList;
