// Main.js
import React from 'react';

import ImageCarousel from './Carousel';
function Main() {
  return (
    <section id="Main">

      <section className="hero">
        <ImageCarousel />
      </section>
          <p>
            At the Roux Institute, Vanaja is establishing a Systems Biology Lab focusing on the modeling of the growth factor receptor signaling pathway. In a collaboration with the Memorial Sloan Kettering Cancer Center, New York, Vanaja is building detailed models of the signaling networks that are implicated in cancers and the mechanisms like negative feedback loops that contribute towards homeostasis. Vanaja is researching the mechanisms of these feedback loops that contribute towards the emergence of resistance in cancer to therapeutics and means of disrupting the feedback loop to improve efficacy.
          </p>
          <p>
            Exploring partnership opportunities, Vanaja is building a multiscale organismic model of insulin driven glucose absorption in whole body models. By training the model on high throughput ‘omics data, Vanaja plans on predicting the trajectory of hyper insulinemia and glycemia in individuals and by using detailed molecular interactions plans on finding possible nodes of intervention to help up with prediabetes and insulin resistance.
          </p>
          <p>
            Vanaja is also collaborating with the Amal group at the Roux Institute to develop AI based Deep Learning/Machine Learning tools to address fundamental biological problems, beginning with developing a mapping for immuno-phenotypes. Those who are interested in post-doc and graduate student positions are encouraged to reach out.
          </p>
      <section className="benefits">
        <h2>Areas of Research</h2>
        <div className="benefits-cards">
          <div className="benefit-card">

            <img src="path/to/icon1.png" alt="Increase clinical success" />
            <h3>Systems and Computational Biology</h3>
            <p>
              Avoid the design and pursuit of dead end candidates. Guide decision-making with BIOiSIM’s Translational Index™, which advances only the most promising drug candidates through R&D to investigational new drug (IND) application.
            </p>
          </div>
          <div className="benefit-card">
            <img src="path/to/icon2.png" alt="Earlier insights" />
            <h3>Mathematical Modeling of Signaling Networks</h3>
            <p>
              BIOiSIM's integrated drug design and development platform identifies new drug candidates with clinical success designed in from day one, while flexibly adapting to address a range of translation challenges – reducing the time it takes to get to IND status by an average of 2.5 years.
            </p>
          </div>
          <div className="benefit-card">
            <img src="path/to/icon3.png" alt="Reduce waste" />
            <h3>Cancer and Diabetes Signal Transduction</h3>
            <p>
              With greater accuracy and scalability, BIOiSIM’s robust, hybrid AI/ML engine reduces the need for unnecessary in vivo experimentation, representing a $3 million cost savings when compared to conventional testing.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;
