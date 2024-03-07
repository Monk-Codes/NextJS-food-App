import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {
 return (
  <header className={classes.header}>
   <Link className={classes.logo} href="/">
    <Image src={logo} alt="logo" priority />
    Next Foods
   </Link>
   <nav className={classes.nav}>
    <ul>
     <li>
      <NavLink href="/meals">Browse Meals</NavLink>
     </li>
     <li>
      <NavLink href="/community">Explore Community</NavLink>
     </li>
    </ul>
   </nav>
  </header>
 );
}
