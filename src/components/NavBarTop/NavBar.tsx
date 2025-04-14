import { useNavbar } from "@/components/NavBarTop/NavBarContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Calendar, Moon, Search } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { navbarTitle } = useNavbar();

  // Real-time date
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "2-digit",

  });

  return (
    <nav className="w-full h-[72px] flex items-center justify-between px-6 border-b bg-white">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-red-900 tracking-[.2em] uppercase mr-4">
        {navbarTitle}
      </h1>

      {/* Right content */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-52 h-9 text-base rounded-md border-gray-300"
          />
        </div>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Moon className="h-5 w-5 text-gray-700" />
        </Button>

        {/* Notification Bell */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-5 w-5 text-gray-700" />
          </Button>
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#7B1A18] ring-2 ring-white" />
        </div>

        {/* Date Display */}
        <div className="flex items-center gap-1 text-gray-600 text-sm font-medium">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
