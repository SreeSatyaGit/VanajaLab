import React from 'react';
import kiran from './images/Kiran.png';
import Satya from './images/Satya2.png';  
import Radha from './images/Radha.png'; 
import Griffin from './images/Griffin T Scott.png';
import shabeer from './images/Shabeer.png'
import Dhanu from './images/Dhanush.png'  

import logan from './images/logan.png'
function People() {

  const collaborators = [
    {
      name: "Radha Mukherjee",
      title: "Associate Scientist at Memorial Sloan Kettering Cancer Center",
      description: "Investigate regulations of kinases and phosphatases within the PI3K-AKT-PTEN network that are important for maintenance of homeostasis. The very same mechanisms play a role in cancer evolution, resistance to targeted therapy of PI3K pathway inhibitors in breast cancer and in the etiology of insulin resistance and Type 2 Diabetes, thereby understanding their regulation allows us to devise better combination therapies in cancer and type 2 diabetes.",
      img: Radha
    },
  ];

  const postdocs = [
    {
      name: "Shabeer Rather",
      title: "Post-Doctoral Scholar",
      description: "Shabeer is a Postdoctoral Research Associate in the Bioengineering Department at the Roux Institute, Northeastern University. He earned his PhD. in Biochemistry from Punjab University, Chandigarh, India, and his bachelor's degree from the University of Kashmir, Srinagar. At the Roux Institute, his research focuses on signaling networks involved in cancers and the mechanisms that contribute to the emergence of resistance to cancer therapeutics.",
      img: shabeer
    },
    {
      name: "Logan Schwartz",
      title: "Post-Doctoral Scholar",
      description: " Working on it..." ,     
       img: logan
    },
  ];

  const phdStuduents = [
    {
      name: "Griffin T Scott",
      title: "Phd Student",
      description: "I am currently in the final semester of the MS in Bioinformatics program here at the Roux Institute. In 2021 I graduated from McGill University with a BSc in Molecular and Cell Biology and a BA in History. I seek to use a bioinformatic approach to uncover the processes which govern resiliency, adaptability, and longevity and I have a passion for understanding the impacts of new medical technologies on society historically and in the present. ",
      img: Griffin
    },
  ];

  const GradStudents = [
    {
      name: "Satya Bharadwaja Nandivada",
      title: "Research Assistant/ Coop Student",
      description: "Working on it...",       
      img: Satya
    },
    {
      name: "Dhanush Aditya Balamurugan",
      title: "Research Assistant",
      description: "Deep Learning Guy....",
      img: Dhanu
    },
  ];

  const Alumni = [
    
  ];
  return (
    <div className="people-container">
      <div className="principal-investigator">
        <div className="image-section">
          <img 
            src={kiran}
            alt="Dr. Kiran Vanaja" 
            className="profile-image"
          />
        </div>
        <div className="details-section">
          <h2>Principal Investigator</h2>
          <h3>Dr. Kiran Vanaja</h3>
          <h4>Research Assistant Professor </h4>
          <p>
            Kiran Vanaja is a research assistant professor in the Life Sciences and Medical Research Group at the Roux Institute. He also holds a research assistant professor position with the Bioengineering department of Northeastern University, Boston. Vanaja is a systems biologist and his research at the Roux Institute focuses on building computational mathematical models of signal transduction networks that are implicated in diseases like cancer and type-2 diabetes. By building these models ground-up on an in-vitro molecular interaction scale, following it up with a model system (animal) in-vivo model, Vanaja plans on ultimately implementing personalized patient specific organismic computational models that could predict the trajectory of diseases and possible outcomes achieved by available therapy. This research focus of Vanaja’s thus complements the personalized computational medicine approach being pioneered here at the Roux Institute.
          </p>
        </div>
      </div>

      <div className="postdocs">
        <h2>Collaborators</h2>
        <div className="postdocs-grid">
          {collaborators.map((postdoc, index) => (
            <div key={index} className="postdoc-card">
              <img src={postdoc.img} alt={postdoc.name} className="postdoc-image" />
              <h3>{postdoc.name}</h3>
              <p className="postdoc-title">{postdoc.title}</p>
              <p>{postdoc.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="postdocs">
        <h2>Postdocs</h2>
        <div className="postdocs-grid">
          {postdocs.map((postdoc, index) => (
            <div key={index} className="postdoc-card">
              <img src={postdoc.img} alt={postdoc.name} className="postdoc-image" />
              <h3>{postdoc.name}</h3>
              <p className="postdoc-title">{postdoc.title}</p>
              <p>{postdoc.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="postdocs">
        <h2>PhD Students</h2>
        <div className="postdocs-grid">
          {phdStuduents.map((postdoc, index) => (
            <div key={index} className="postdoc-card">
              <img src={postdoc.img} alt={postdoc.name} className="postdoc-image" />
              <h3>{postdoc.name}</h3>
              <p className="postdoc-title">{postdoc.title}</p>
              <p>{postdoc.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="postdocs">
        <h2>Graduate Students</h2>
        <div className="postdocs-grid">
          {GradStudents.map((postdoc, index) => (
            <div key={index} className="postdoc-card">
              <img src={postdoc.img} alt={postdoc.name} className="postdoc-image" />
              <h3>{postdoc.name}</h3>
              <p className="postdoc-title">{postdoc.title}</p>
              <p>{postdoc.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="postdocs">
        <h2>Alumni</h2>
        <div className="postdocs-grid">
          {Alumni.map((postdoc, index) => (
            <div key={index} className="postdoc-card">
              <img src={postdoc.img} alt={postdoc.name} className="postdoc-image" />
              <h3>{postdoc.name}</h3>
              <p className="postdoc-title">{postdoc.title}</p>
              <p>{postdoc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default People;