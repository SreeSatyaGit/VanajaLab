import React from 'react';

function Publications() {

  const publications = [
    {
        authors: 'Xiong Li , Sangwoo Shim , Katherine R Hardin , Kiran G Vanaja , Hongjun Song, Andre Levchenko , Guo-Li Ming , James Q Zheng 2022',
        title: 'Signal amplification in growth cone gradient sensing by a double negative feedback loop among PTEN, PI (3, 4, 5) P3 and actomyxosin',
        journal: 'NIH',
        date: '2022 Aug 31.',
        doi: 'https://pubmed.ncbi.nlm.nih.gov/36055521/',
    },
    {
      authors: 'Radha Mukherjee , Kiran G Vanaja , Jacob A Boyer, Sunyana Gadal , Hilla Solomon , Sarat Chandarlapaty , Andre Levchenko , Neal Rosen  2021',
      title: 'Regulation Of PTEN Translation By PI3K Signaling Maintains Pathway Homeostasis',
      journal: 'NIH',
      date: '2022 Aug 31.',
      doi: 'https://pubmed.ncbi.nlm.nih.gov/33606974/',
  },
  {
    authors: 'Yasir Suhail , Margo P. Cain , Kiran Vanaja Gireesan ,  Paul A. Kurywchak , Andre Levchenko ,  Raghu Kalluri ,and Kshitiz 2019',
    title: 'Systems Biology Of Cancer Metastasis',
    journal: 'NIH',
    date: '2022 Aug 31.',
    doi: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6716621/',
},
{
  authors: 'Kiran G Vanaja , Winston Timp , Andrew P Feinberg , Andre Levchenko  2018',
  title: 'A Loss Of Epigenetic Control Can Promote Cell Death Through Reversing The Balance Of Pathways In A Signaling Network',
  journal: 'NIH',
  date: '2022 Aug 31.',
  doi: 'https://pubmed.ncbi.nlm.nih.gov/30244832/',
},
{
  authors: 'Ellen F Foxman , James A Storer , Kiran Vanaja , Andre Levchenko , Akiko Iwasaki  2016',
  title: 'Two Interferon-Independent Double-Stranded RNA-Induced Host Defense Strategies Suppress The Common Cold Virus At Warm Temperature',
  journal: 'NIH',
  date: '2022 Aug 31.',
  doi: 'https://pubmed.ncbi.nlm.nih.gov/27402752/',
},
    
];

const styles = {
  container: {
      textAlign: 'center',
  },
  header: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
  },
  list: {
      textAlign: 'left',
      listStyleType: 'none',
  },
  listItem: {
      margin: '10px 0',
  }
};




  return (
    <div style={styles.container}>
    <h1>Publications</h1>
    <ul style={styles.list}>
        {publications.map((publication, index) => (
            <li key={index} style={styles.listItem}>
                <strong>{publication.authors}</strong> 
                ({publication.date}). {publication.title}
                {publication.volume ? <span>{publication.volume}</span> : ''} 
                {publication.pages ? <span>{publication.pages}</span> : ''}
                 .{publication.doi ? <a href={`${publication.doi}`}>
                {publication.doi}</a> : ''} 
                {/* PMID: {publication.pmid ? <span>{publication.pmid}</span> : ''} 
                PMCID: {publication.pmcid ? <span>{publication.pmcid}</span> : ''}. */}
            </li>
        ))}
    </ul>
</div>
  );
}

export default Publications;
