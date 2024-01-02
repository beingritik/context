import "./App.css";
import Layout from "./Components/Layout";
import UserList from "./Components/UserList";
import Home from "./Components/Home"
import ApicontextProvider from "./Context/ApicontextProvider";
import ViewUser from "./Components/ViewUser";


import {
  Route,
  Routes,
  // createRoutesFromElements,
  // RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ApicontextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element = {< Home />}/>
            <Route path="users" element={<UserList />} />
            <Route path="user/:id" element={<ViewUser />}/>
          </Route>
        </Routes>
      </ApicontextProvider> 
    </Router>
  );
}

export default App;


  // const UserRouter =
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       <Route path="users" element={<UserList />} />
  //     </Route>
  //   );


  {
    /* <RouterProvider router={UserRouter} /> */
  }
