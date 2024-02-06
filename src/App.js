import build from ".//public/dark.png";
import home from ".//public/VectrFlow.png";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Section from "./Section";
import { FooterSection } from "./FooterSection";
const App = () => (
  
  <div className="software-company-website">
    <div className="hero-wrapper">
      <div className="hero-wrapper-text">
        <div className="header-text">
          <div className="h-1-primary-text">
            <span>
              <span className="h-1-primary-text-span"></span>
              <span className="h-1-primary-text-span2">Low Code ETL</span>
              <span className="h-1-primary-text-span3"></span>
              <span className="h-1-primary-text-span4">
                <br />
              </span>
              <span className="h-1-primary-text-span5">for Unstructured Data</span>
              <span className="h-1-primary-text-span4">
                <br />
              </span>
              <span className="h-1-primary-text-span6">& GenAI Platform</span>
            </span>
          </div>
        </div>
        <div className="btn-primary">
          <Link to="/pricing" className="let-s-get-started">
            Let’s get started!
          </Link>
        </div>
        <div className="card-main-title">
          A SaaS based low code ETL pipeline for creating high-quality vector
          embedding<br /> of unstructured data to build Generative AI
          applications.
        </div>
      </div>
      <div className="hero-wrapper-image">
        <div className="hero-wrapper-image-center">
          <img className="web-development-1" src={home} alt="VectrFlow Image" />
        </div>
      </div>
    </div>

    <div className="drag">
      <div className="card-main-title">
        Simply drag and drop Data Loaders, LLM's, Agents,
        Chat Models, Vector Stores etc to build Gen AI Apps
              
      </div>
        <img className="rectangle-17" src={build} alt="Build Image" />
    </div>

    <Section/>

    
    <FooterSection/>
  </div>
);

export default App;
