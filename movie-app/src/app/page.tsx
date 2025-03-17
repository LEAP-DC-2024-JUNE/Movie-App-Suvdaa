import MovieCard from "@/components/MovieCard";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <div className="flex">
          <MovieCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
