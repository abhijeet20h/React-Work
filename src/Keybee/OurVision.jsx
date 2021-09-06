import React from "react";
import vision from "../Assects/n_J2A2921.png";
import "../App.css";
export default function OurVision() {
  return (
    <div>
      <section className="ourvision">
        <div className="vision_cont">
          {" "}
          <h2>OUR VISION</h2>
          <p>
            Main vision of Kay Bee Bio-Organics is to replace harmful chemical
            synthetic pesticides by organic pesticides with insuring less cost
            of production at farmer level. Being in line with our mote we
            produce the products which are harmless to mammalian’s, environments
            and rhizospheres. Our products are highly suitable for organic
            farming and recommended for residue-free export quality
            agro-production, and sustainable agriculture.
          </p>
        </div>
        <img src={vision} alt="Our vision" />
      </section>
    </div>
  );
}
