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
