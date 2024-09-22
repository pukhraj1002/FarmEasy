import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo(1)(1).png"

export function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 backdrop-blur-sm z-50 bg-aquamarine-100">
      <div className="flex w-screen items-center justify-evenly p-4">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Image
              src={Logo}
              alt={`${siteConfig.name} Logo`}
              width={100}
              className="logo"
              style={{borderTopLeftRadius: '30%',borderBottomRightRadius:"30%", padding: '10px' }}
            />
          </p>
        </div>
        <ul className="flex gap-20">
        <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/" style={{ color: 'green', textDecoration:'none'}}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/about" style={{ color: 'green', textDecoration:'none'}}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/home" style={{ color: 'green', textDecoration:'none'}}>
              Disease Detection
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/sensor" style={{ color: 'green', textDecoration:'none'}}>
              Crop Monitoring
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/models" style={{ color: 'green', textDecoration:'none'}}>
              3D-Models
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/marketplace" style={{ color: 'green', textDecoration:'none'}}>
              MarketPlace
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/Map" style={{ color: 'green', textDecoration:'none'}}>
              Map
            </Link>
          </li>
        </ul>
        <ThemeToggle style={{ backgroundColor: 'green', padding: '10px', borderRadius: '50%' }} />
      </div>
    </nav>
  );
}