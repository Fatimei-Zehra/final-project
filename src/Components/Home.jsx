//!FATIME
import React from "react";
import Main from "./Main/Main";
import Timer from "./Timer/Timer";
import MainSlider from "./MainSlider/MainSlider";
import Categories from "./Categories/Categories";
import Selling from "./Selling/Selling";
import Adversiting from "./Advertising/Adversiting";
import Services from "./Services/Services";
import ProductList from "./OurProducts/Products";

function Home() {
  return (
    <div>
      <Main />
      <Timer />
      <MainSlider />
      <Categories />
      <Selling />
      <Adversiting />
      <ProductList />
      <Services />
    </div>
  );
}

export default Home;