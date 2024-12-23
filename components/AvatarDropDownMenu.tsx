import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoHelp, IoSettingsOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
import Link from "next/link";

const AvatarDropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10 cursor-pointer">
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="md:mr-16 mr-28">
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Avatar className="size-8 text-sm">
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Mohamed Asjedh</p>
          </div>
        </div>

        <DropdownMenuItem>
          <IoSettingsOutline size={18} className="mr-2" />
          <Link href="/">Profile Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoHelp size={18} className="mr-2" />
          <Link href="/">Help Center</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BsCurrencyDollar size={18} className="mr-2" />
          <Link href="/">Upgrade Plan</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <PiSignOut size={18} className="mr-2" />
          <Link href="/">Sign Out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDownMenu;
