"use client";
import logo from "/public/images/greensteps.png";
import "./discoverSection.css";
import Image from "next/image";
import { useState } from "react";

function DiscoverSection() {
  const [selectedSteps, setSelectedSteps] = useState("I");

  const handleChangeStep = (step: string) => {
    setSelectedSteps(step);
  };

  return (
    <section id="discover">
      <div className="left">
        <h2>discover</h2>
        <h3>Prime Opportunities</h3>
        <div className="greensteps">
          <button
            onClick={() => handleChangeStep("I")}
            className={`${selectedSteps === "I" ? "active" : ""}`}
          >
            greensteps I
          </button>
          <button
            onClick={() => handleChangeStep("II")}
            className={`${selectedSteps === "II" ? "active" : ""}`}
          >
            greensteps II
          </button>
          <button
            onClick={() => handleChangeStep("III")}
            className={`${selectedSteps === "III" ? "active" : ""}`}
          >
            greensteps III
          </button>
        </div>

        <p>
          In a world where the hustle and bustle of a metropolitan city can wear
          you down, everyone deserves a place to escape to
          <span>— a real &apos;home away from home.&apos;home</span>
        </p>
        <p>
          That&apos;s precisely what we&apos;re here to offer you. Our carefully
          curated real estate opportunities provide you with the perfect retreat
          from the urban chaos, all while potentially securing a solid
          investment in your future.
        </p>
        <button>learn more</button>
      </div>
      <div className="right">
        <div className="banner">
          <Image src={logo} alt={"rooba"} fill sizes="100%" />
          <h4>greensteps {selectedSteps}</h4>
          <p className="location">Alwar, Rajasthan</p>
        </div>
        <div className="tags_container">
          <p className="title">tags</p>
          <div className="tag">regular plot</div>
          <div className="tag">2,970 Sq ft*</div>
          <div className="tag focus">Fractional Ownership</div>
        </div>
        <div className="other_tags_container">
          <p className="title">Other Tags</p>
          <div className="tag">Electricity</div>
          <div className="tag">Agricultural Land</div>
          <div className="tag">Maintenance Inclusive</div>
          <div className="tag">Fence</div>
        </div>
        <div className="price_container">
          <p className="title">Price</p>
          <div className="price_card">
            <span>INR</span> 1.75 Cr
          </div>
          <div className="price_card">
            2900/
            <span>Sq yd</span>
          </div>
          <div className="price_card focus">
            <span>INR</span>
            5,00,000
          </div>
        </div>
        <div className="actions">
          <button className="filled">Invest Now</button>
          <button className="bordered">contact us</button>
        </div>
      </div>
    </section>
  );
}
export default DiscoverSection;
