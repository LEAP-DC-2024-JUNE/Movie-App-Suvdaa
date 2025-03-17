"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

type SeeMoreProps = {
  categoryType: string;
};

const SeeMore = ({ categoryType }: SeeMoreProps) => {
  const router = useRouter();

  const handleSeeMore = () => {
    router.push(`/movies?type=${categoryType}&page=1`); // Start pagination from page 1
  };

  return (
    <Button
      className="hover:bg-inherit text-[13px] cursor-pointer"
      onClick={handleSeeMore}
    >
      See more <MoveRight />
    </Button>
  );
};

export default SeeMore;

// import React from "react";
// import { Button } from "./ui/button";
// import { MoveRight } from "lucide-react";
// import { useRouter } from "next/navigation";
// "use client";

// type seeMore = {
//   categoryType: string;
// };
// const SeeMore = ({ categoryType }: seeMore) => {
//   const router = useRouter();
//   const handleSeeMore = () => {
//     router.push(`/movies?type=${categoryType}`);
//   };
//   return (
//     <div className=" flex gap-2">
//       <Button
//         className=" hover:bg-inherit text-[13px] cursor-pointer"
//         onClick={handleSeeMore}
//       >
//         See more <MoveRight />
//       </Button>
//     </div>
//   );
// };

// export default SeeMore;
