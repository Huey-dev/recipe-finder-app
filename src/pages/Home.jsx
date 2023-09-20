import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the world with
            <br />
            Recipes at your
            <br />
            Fingertips
          </p>
        }
        type="home"
      />
    </main>
  );
};

export default Home;
