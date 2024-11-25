// Contact.js
import React from 'react';

function ICSB() {
  return (
    <div>
      <header style={{ backgroundColor: '#900000', color: 'white', textAlign: 'center', padding: '2rem 1rem' }}>
        <h1>Welcome to [Your Lab Name]</h1>
        <h2>Advancing Research in Targeted Cancer Therapies</h2>
      </header>

      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ borderBottom: '2px solid #900000', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#900000' }}>About the Lab</h3>
          <p>
            Our lab focuses on computational and experimental approaches to unravel molecular signaling pathways
            and improve therapeutic strategies for targeted cancer therapies.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ borderBottom: '2px solid #900000', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#900000' }}>Contact Information</h3>
          <p><strong>Name:</strong> Dr. [Your Name]</p>
          <p><strong>Email:</strong> <a href="mailto:your_email@example.com" style={{ color: '#900000', textDecoration: 'none' }}>your_email@example.com</a></p>
          <p><strong>Phone:</strong> +1 (XXX) XXX-XXXX</p>
          <p><strong>Office Address:</strong> [Your Lab Address]</p>
          <p><strong>Lab Website:</strong> <a href="https://your-lab-website.com" target="_blank" rel="noopener noreferrer" style={{ color: '#900000', textDecoration: 'none' }}>https://your-lab-website.com</a></p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ borderBottom: '2px solid #900000', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#900000' }}>Recent Publications</h3>
          <ul>
            <li><a href="https://doi.org/your-paper-link" target="_blank" rel="noopener noreferrer" style={{ color: '#900000', textDecoration: 'none' }}>Paper Title 1</a></li>
            <li><a href="https://doi.org/your-paper-link" target="_blank" rel="noopener noreferrer" style={{ color: '#900000', textDecoration: 'none' }}>Paper Title 2</a></li>
            <li><a href="https://doi.org/your-paper-link" target="_blank" rel="noopener noreferrer" style={{ color: '#900000', textDecoration: 'none' }}>Paper Title 3</a></li>
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem 0', backgroundColor: '#900000', color: 'white' }}>
        <p>&copy; 2024 [Your Lab Name]. All rights reserved.</p>
        <p>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>LinkedIn</a>
          <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>ResearchGate</a>
        </p>
      </footer>
    </div>
  );
}

export default ICSB;
