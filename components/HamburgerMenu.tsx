import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const HamburgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="block lg:hidden focus:outline-none hover:cursor-pointer">
          <RxHamburgerMenu size={24} className="text-gray-800" />
        </div>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent
        className="w-40 bg-white shadow-md rounded-md p-2 mr-4 mt-2 md:hidden"
        align="end">
        <DropdownMenuItem>
          <Link href="/">Find a Job</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/">Companies</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/">Post a Job</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" className="text-green-500">
            Login
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HamburgerMenu;
