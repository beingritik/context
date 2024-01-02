import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to={'/users'}>
        <button>Fetch all Users</button>
      </Link>
    </>
  );
}

export default Home;
