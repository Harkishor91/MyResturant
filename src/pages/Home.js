import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import WebsiteLogo from "../assets/images/roll.jpg";
import '../styles/HomeStyle.css'
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${WebsiteLogo})`}}>
        <div className="headerContainer">
          <h1>Visit MyResturant</h1>
          <p>Best Food In Himachal</p>
          <Link to={"/menu"}>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
