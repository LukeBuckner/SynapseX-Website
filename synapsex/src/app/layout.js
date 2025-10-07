import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "SynapseX",
  description: "Pioneering student-led brain-computer interface innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <nav className="nav" role="navigation" aria-label="Main Navigation">
          <div className="nav-left">
            <Image src="/logo2dgold.png" alt="SynapseX logo" className="brand-logo" width={112} height={28} />
          </div>
          <div className="nav-menu">
            <div><Link href="/" className="nav-link">Home</Link></div>
            <div><Link href="/about" className="nav-link">About</Link></div>
            
            <div><a href="#" className="nav-link">Sponsors</a></div>
            <div><a href="#" className="nav-link">Contact</a></div>
          </div>
        </nav>
        
        {children}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="https://www.instagram.com/gtsynapsx/" className="footer-link">Instagram</a>
              <a href="https://join.slack.com/t/synapsex/shared_invite/zt-3be6l7lzp-OHI2h9L0Tjq_se0ksqh3SQ" className="footer-link">Slack</a>
              <a href="https://gatech.campuslabs.com/engage/organization/synapsex" className="footer-link">GT Engage</a>
              <a href="https://www.linkedin.com/company/synapse-x-at-georgia-tech/" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
