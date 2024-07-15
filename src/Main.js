// Main.js
import React from 'react';
import ImageCarousel from './Carousel';
function Main() {
  return (
    <section id="Main">

      <section className="hero">
        <ImageCarousel />
      </section>
      <div className="labInfo">
          <p>
            At the Roux Institute, Vanaja is establishing a Systems Biology Lab focusing on the modeling of the growth factor receptor signaling pathway. In a collaboration with the Memorial Sloan Kettering Cancer Center, New York, Vanaja is building detailed models of the signaling networks that are implicated in cancers and the mechanisms like negative feedback loops that contribute towards homeostasis. Vanaja is researching the mechanisms of these feedback loops that contribute towards the emergence of resistance in cancer to therapeutics and means of disrupting the feedback loop to improve efficacy.
          </p>
          <p>
            Exploring partnership opportunities, Vanaja is building a multiscale organismic model of insulin driven glucose absorption in whole body models. By training the model on high throughput ‘omics data, Vanaja plans on predicting the trajectory of hyper insulinemia and glycemia in individuals and by using detailed molecular interactions plans on finding possible nodes of intervention to help up with prediabetes and insulin resistance.
          </p>
          <p>
            Vanaja is also collaborating with the Amal group at the Roux Institute to develop AI based Deep Learning/Machine Learning tools to address fundamental biological problems, beginning with developing a mapping for immuno-phenotypes. Those who are interested in post-doc and graduate student positions are encouraged to reach out.
          </p>
      </div>
      <section className="benefits">
        <h2>Areas of Research</h2>
        <div className="benefits-cards">
          <div className="benefit-card">

            <h3>Systems and Computational Biology</h3>
          </div>
          <div className="benefit-card">
            <h3>Mathematical Modeling of Signaling Networks</h3>
          </div>
          <div className="benefit-card">
            <h3>Cancer and Diabetes Signal Transduction</h3>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;
