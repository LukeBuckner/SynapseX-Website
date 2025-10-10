import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";
import "./globals.css";

export const metadata = {
  title: "GT SynapseX - Georgia Tech Brain-Computer Interface Innovation",
  description: "SynapseX is Georgia Tech's first student-run BCI organization, uniting students from Neuroscience, Computer Science, and Engineering to build real brain-computer interface prototypes and shape the future of neurotechnology.",
  keywords: "brain computer interface, BCI, Georgia Tech, neurotechnology, neuroscience, computer science, biomedical engineering, student research, neural engineering, machine learning, neurology",
  authors: [
    { name: "SynapseX Team", url: "https://gtsynapsex.com" },
    { name: "Georgia Institute of Technology" }
  ],
  creator: "SynapseX - Georgia Tech Student Organization",
  publisher: "Georgia Institute of Technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://gtsynapsex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SynapseX - Georgia Tech Brain-Computer Interface Innovation",
    description: "SynapseX is Georgia Tech's first student-run BCI organization, uniting students from Neuroscience, Computer Science, and Engineering to build real brain-computer interface prototypes.",
    url: 'https://gtsynapsex.com',
    siteName: 'SynapseX',
    images: [
      {
        url: '/synapseatgt.png',
        width: 1200,
        height: 630,
        alt: 'SynapseX - Brain-Computer Interface Innovation',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SynapseX - Georgia Tech Brain-Computer Interface Innovation",
    description: "Georgia Tech's first student-run BCI organization building the future of neurotechnology.",
    images: ['/synapseatgt.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/webicon.png',
    shortcut: '/webicon.png',
    apple: '/webicon.png',
  },
  verification: {
    google: 'ce3d4e48e6542686', // Extracted from your existing HTML file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <nav className="nav" role="navigation" aria-label="Main Navigation">
          <div className="nav-left">
            <Image src="/logo2dgold.png" alt="SynapseX logo" className="brand-logo" width={112} height={28} />
          </div>
          <div className="nav-menu">
            <div><Link href="#home" className="nav-link">Home</Link></div>
            <div><Link href="#about" className="nav-link">About</Link></div>
            <div><Link href="#projects" className="nav-link">Projects</Link></div>
            <div><Link href="#sponsor" className="nav-link">Sponsor</Link></div>
            <div><Link href="#contact" className="nav-link">Contact</Link></div>
          </div>
        </nav>
        {children}

      </body>
    </html>
  );
}
