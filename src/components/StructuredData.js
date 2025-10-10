export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SynapseX",
    "alternateName": "SynapseX at Georgia Tech",
    "description": "Georgia Tech's first student-run Brain-Computer Interface organization, uniting students from Neuroscience, Computer Science, and Engineering to build real BCI prototypes.",
    "url": "https://gtsynapsex.com",
    "logo": "https://gtsynapsex.com/webicon.png",
    "foundingDate": "2024",
    "founders": {
      "@type": "CollegeOrUniversity",
      "name": "Georgia Institute of Technology"
    },
    "developer": {
      "@type": "Person",
      "name": "Sandro Karkusashvili",
      "jobTitle": "Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "SynapseX"
      }
    },
    "parentOrganization": {
      "@type": "CollegeOrUniversity",
      "name": "Georgia Institute of Technology",
      "url": "https://gatech.edu"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "Georgia",
      "addressCountry": "United States"
    },
    "sameAs": [
      "https://www.instagram.com/gtsynapsx/",
      "https://www.linkedin.com/company/synapse-x-at-georgia-tech/",
      "https://gatech.campuslabs.com/engage/organization/synapsex"
    ],
    "memberOf": {
      "@type": "CollegeOrUniversity",
      "name": "Georgia Institute of Technology"
    },
    "knowsAbout": [
      "Brain-Computer Interface",
      "Neurotechnology",
      "Neuroscience",
      "Computer Science",
      "Biomedical Engineering",
      "Neural Engineering"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "researchArea": [
      "Neural Signal Processing",
      "Machine Learning for Neuroscience",
      "Biomedical Device Engineering"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}