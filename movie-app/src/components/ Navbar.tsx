"use client";
import Logo from "../../svg/logo";
import { Button } from "@/components/ui/button";
import { Search, Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { theme, setTheme } = useTheme();

  return isClicked ? (
    <SearchInput onClose={() => setIsClicked(false)} />
  ) : (
    <motion.div
      key="headerClient"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row items-center w-full h-[59px] justify-between p-4 "
    >
      <Link href="/">
        <Logo />
      </Link>
      <div>
        <div className=" flex gap-3">
          <Button
            className=" border-gray-400 rounded-xl"
            variant="outline"
            size="icon"
            onClick={() => setIsClicked(true)}
          >
            <Search />
          </Button>
          {theme === "dark" ? (
            <Button
              className=" border-gray-400 rounded-xl"
              variant="outline"
              size="icon"
              onClick={() => setTheme("light")}
            >
              <Sun />
            </Button>
          ) : (
            <Button
              className=" border-gray-400 rounded-xl"
              variant="outline"
              size="icon"
              onClick={() => setTheme("dark")}
            >
              <Moon />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search, Moon } from "lucide-react";
// import Logo from "../../svg/logo";
// import useSWR from "swr";
// import { getTDMBMovie } from "@/utils/api";
// import Link from "next/link";

// const Navbar = () => {
//   const [count, setCount] = useState(0);
//   const { data, error, isLoading } = useSWR(
//     "/genre/movie/list?language=en",
//     getTDMBMovie
//   );
//   // console.log(data?.genres);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="h-16 flex items-center justify-between gap-4">
//           {/* <Logo /> */}
//           <Link href="/"></Link>
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 grid place-items-center">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="w-5 h-5 text-blue-700"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
//                 <path d="M7 2v20" />
//                 <path d="M17 2v20" />
//                 <path d="M2 12h20" />
//                 <path d="M2 7h5" />
//                 <path d="M2 17h5" />
//                 <path d="M17 17h5" />
//                 <path d="M17 7h5" />
//               </svg>
//             </div>
//             <span className="text-xl font-semibold italic text-blue-700">
//               Movie Z
//             </span>
//           </div>
//           //dropdown
//           <div>
//             <Button
//               onClick={() => setCount(count + 1)}
//               className="hidden md:flex items-center gap-2"
//             >
//               Genre
//             </Button>
//             <div>
//               {data?.genres.map((genre) => {
//                 return <div key={genre}>{genre.name}</div>;
//               })}
//             </div>
//           </div>
//           //search bar
//           <div className="flex-1 max-w-xl">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//               <Input
//                 type="search"
//                 placeholder="Search.."
//                 className="w-full pl-10 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
//               />
//             </div>
//           </div>
//           //theme toggle
//           <Button variant="ghost" size="icon" className="h-9 w-9">
//             <Moon className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
