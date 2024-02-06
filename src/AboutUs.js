import React from "react";
import "./AboutUs.css";
import mission from "./public/mission.png";
import approach from "./public/Approach.png";
import vfe from "./public/freeflow.png";
import qa from "./public/quality.svg";
import collab from "./public/collaboration.svg";
import exp from "./public/expertise.svg";
import { FooterSection } from "./FooterSection";
const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <h1 className="text-wrapper-3">About Us</h1>
        <p className="p">
          Welcome to VectrFlow, where we transform unstructured data into
          insightful narratives, unlocking the power of information for your
          Generative AI applications. <br></br> At VectrFlow, we understand the
          value of meaningful analysis and are dedicated to guiding our users
          through every step of the process to ensure relevance and accuracy.
        </p>
      </div>

      <div className="content">

        <div className="frame1">
          <div className="hp1">
            <h1>Mission Statement</h1>
            <p>
              At the core of our mission is the commitment to convert
              unstructured data into clean, in-depth datasets, paving the way
              for the seamless integration of Generative AI applications. We
              believe in the potential of data to drive innovation, and our
              mission is to empower businesses with the tools they need to
              harness this potential fully.
            </p>
          </div>
          <div>

          </div>
          <div className="bg-content">
            <h1>Mission</h1>
          </div>
        </div>

        <div className=" frame2">
          
          <div className="bg-content">
            <h1> Approach</h1>
          </div>
          <div className="hp1">
            <h1>Our Approach</h1>
            <p>
            Unleashing Insights from Unstructured Data We specialize in the conversion of unstructured data into actionable insights. Our team collaborates closely with users, incorporating their input throughout the analysis process to guarantee the relevance of our findings. By focusing on understanding the unique requirements of each project, we ensure that our clients receive tailored solutions that align with their objectives
            </p>
          </div>
        </div>

      
        <div className="frame1">
          <div className="hp1">
            <h1>Free Flow of Vector Embeddings</h1>
            <p>
              Once our initial analysis is complete, we go the extra mile with
              multiple quality checks. These tests are an integral part of our
              analysis package, ensuring the accuracy and reliability of the
              results. Our commitment to quality extends beyond the analysis
              phase, as we deliver the findings to our clients with a
              certification of the entire process.
            </p>
          </div>
          <div className="vfe-img">
            <img src={vfe} className="vfe" />
          </div>
        </div>
      </div>

      {/* <div className="choose-vf">
        <h1>Why choose VectrFlow?</h1>
        <div className="items">
          <div className="item1">
            <img className="p1" src={exp} alt="" />
            <h2>Expertise</h2>
            <p>Our team comprises experts in data analysis and Generative AI, ensuring that you receive top-notch insights for your applications.</p>
          </div>
          <div className="item2">
            <img className="p1" src={exp} alt="" />
            <h2>Expertise</h2>
            <p>Our team comprises experts in data analysis and Generative AI, ensuring that you receive top-notch insights for your applications.</p>
          </div>
          <div className="item3">
            <img className="p1" src={exp} alt="" />
            <h2>Expertise</h2>
            <p>Our team comprises experts in data analysis and Generative AI, ensuring that you receive top-notch insights for your applications.</p>
          </div>
        </div>
      </div>
 */}

      <div className="text-wrapper-11">Why choose VectrFlow?</div>

      <div className="frame-27">
        <div className="frame-28">
          <img className="frame-29" alt="Frame" src={exp} />
          <div className="frame-30">
            <div className="text-wrapper-14">Expertise</div>
            <p className="text-wrapper-15">
              Our team comprises experts in data analysis and Generative AI,
              ensuring that you receive top-notch insights for your
              applications.
            </p>
          </div>
        </div>
        <div className="frame-28">
          <img className="frame-29" alt="Frame" src={collab} />
          <div className="frame-30">
            <div className="text-wrapper-14">Collaboration</div>
            <p className="text-wrapper-15">
              We believe in working hand-in-hand with our clients, fostering a
              collaborative approach to address unique challenges and achieve
              common goals.
            </p>
          </div>
        </div>
        <div className="frame-28">
          <img className="frame-29" alt="Frame" src={qa} />
          <div className="frame-30">
            <div className="text-wrapper-14">Quality Assurance</div>
            <p className="text-wrapper-15">
              Our rigorous quality checks and certification process are designed
              to instill confidence in the accuracy and reliability of our
              results.
            </p>
          </div>
        </div>
      </div>

      <FooterSection/>
    </>
  );
};

export default AboutUs;
