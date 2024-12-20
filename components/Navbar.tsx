import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import AvtarDropDownMenu from "./AvtarDropDownMenu";

const Navbar = async () => {
  const user = true;

  return (
    <header className="header-container">
      <nav className="temp">
        <div>
          <Link href={"/"} className="temp flex-row">
            <Image src={"/logo.png"} alt={"Logo"} width={50} height={50} />
            <span className="font-medium text-xl">FLINT</span>
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex gap-5">
            <li className="navbar-li-tag group">
              <Link href={"/"} className="navbar-link-tag">
                Find a Job
              </Link>
              <span className="navbar-underline group-hover:scale-x-100"></span>
            </li>
            <li className="navbar-li-tag group">
              <Link href={"/"} className="navbar-link-tag">
                Companies
              </Link>
              <span className="navbar-underline group-hover:scale-x-100"></span>
            </li>
            <li className="navbar-li-tag group ">
              <Link href={"/"} className="navbar-link-tag">
                Post a Job
              </Link>
              <span className="navbar-underline group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5 text-black">
          {user ? (
            <AvtarDropDownMenu />
          ) : (
            <div className="flex gap-5">
              <Link
                href={"/login"}
                className="bg-white button border shadow-md hidden lg:block"
                type="submit"
              >
                Login
              </Link>
              <Link
                href={"/login"}
                className="bg-black text-white button shadow-md"
                type="submit"
              >
                Signup
              </Link>
            </div>
          )}
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
