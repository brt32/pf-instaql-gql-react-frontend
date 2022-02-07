import React from "react";
import { logUserOut } from "../apollo";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <button onClick={() => logUserOut()}>Log out now!</button>
    </div>
  );
};

export default Home;
