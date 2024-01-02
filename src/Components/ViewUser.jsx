import { useContext, useEffect, useState } from "react";
import ApiContext from "../Context/ApiContext";
import { useParams } from "react-router-dom";

function ViewUser() {
  const { userListData } = useContext(ApiContext);
  const { id } = useParams();
  const [singleinfo, setsingleinfo] = useState(null);
  console.log(id);

  useEffect(() => {
      const singlevalue = userListData.filter((user) => user.id === Number(id));
      if (singlevalue.length > 0) {
        console.log("singlevalue", singlevalue);
        setsingleinfo(singlevalue[0]);
      } else {
        setsingleinfo("no user found");
        console.log("User not found");
      }

  }, [id, userListData]);

  if (!singleinfo) {
    // You can render a loading state or an error message here
    return <div>Fetching...</div>;
  }
  return (
    <>
      <h3>The single user info is:</h3>
      {
        <>
          <ol key={singleinfo.id}>
            <li> title = {singleinfo.title || "Not present"}</li>
            <li>
              {" "}
              completed ={" "}
              {JSON.stringify(singleinfo.completed) || "Not present"}
            </li>
            <li> userid = {singleinfo.userId || "Not present"}</li>
          </ol>
        </>
      }
    </>
  );
}

export default ViewUser;
