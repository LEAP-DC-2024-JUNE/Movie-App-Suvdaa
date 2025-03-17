"use client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryType = searchParams.get("type") || "upcoming";
  const page = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`/movies?type=${categoryType}&page=${newPage}`);
    }
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    // Always show first two pages
    pages.push(1);
    if (totalPages > 1) pages.push(2);

    // Ellipsis before last page if needed
    if (page < totalPages - 2) pages.push("...");

    // Always show last page
    if (totalPages > 2) pages.push(totalPages);

    return pages.map((num, index) =>
      num === "..." ? (
        <span key={index} className="text-gray-600 px-2">
          ...
        </span>
      ) : (
        <Button
          key={num}
          variant={page === num ? "outline" : "ghost"}
          onClick={() => handlePageChange(num as number)}
        >
          {num}
        </Button>
      )
    );
  };

  return (
    <div className="flex justify-center mt-6 space-x-2 items-center">
      <Button
        variant="ghost"
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        &larr;
      </Button>
      {renderPageNumbers()}
      <Button
        variant="ghost"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        &rarr;
      </Button>
    </div>
  );
};

export default Pagination;
