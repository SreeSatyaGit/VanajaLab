import React from 'react';
import kiran from './images/Kiran.png';
import Satya from './images/Satya2.png';  
import Radha from './images/Radha.png'; 
import Griffin from './images/Griffin T Scott.png';
import shabeer from './images/Shabeer.png'
import Dhanu from './images/Dhanush.png'  
import jose from './images/jose_sc.png'
import Austin from './images/Austin.png'

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
      description: " Logan Schwartz is a Postdoctoral Researcher in the lab, where her current work uses a systems biology approach to explore the complex signaling networks involved in diseases like cancer and Type 2 diabetes. Her previous research expertise includes hematopoietic stem cells, aging, immunology, and hematologic malignancies such as acute myeloid leukemia. Dr. Schwartz earned her Ph.D. in Mammalian Genetics from Tufts University in May 2024 and is committed to leveraging her research to enhance our understanding of these challenging health conditions and contribute to therapeutic advancements that could improve patient outcomes. " ,     
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
    {
      name: "Austin Marty",
      title: "PhD Student",
      description: "",
      img: Austin
    }
  ];

  const GradStudents = [
    {
      name: "SreeSatya  Nandivada",
      title: "Research Assistant/ Coop Student",
      description: (
        <span>
          I'm currently pursuing my master's in electrical and computer engineering at Northeastern University. At Vanaja Labs, I focus on developing mathematical models for cell signaling pathways and implement computational methods for Immuno-phenotyping and maintain the Vanaja Labs website. <br /><br />
          <a href="https://deepomap.com/satya" target="_blank" rel="noopener noreferrer">Website</a>
        </span>
      ),
      img: Satya
    }
  ];

  const Alumni = [
    {
      name: "Josephine Patten",
      title: "Summer Intern",
      description: "I am Josephine Patten, an undergrad at Worcester Polytechnic Institute graduating in the spring of 2024 studying biology/biotechnology. I am interested in cancer, molecular, or cellular biology research on human health and diseases.",       
      img: jose
    },
    {
      name: "Dhanush Aditya Balamurugan",
      title: "Research Assistant",
      description: "",
      img: Dhanu
    }
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
              {postdoc.img && (
                <img src={postdoc.img} alt={postdoc.name} className="postdoc-image" />
              )}
              <h3>{postdoc.name}</h3>
              <p className="postdoc-title">{postdoc.title}</p>
              {postdoc.description && (
                <p>{postdoc.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default People;