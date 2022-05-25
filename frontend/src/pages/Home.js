import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { useEffect } from "react";

export default function Home() {
  const books = useSelector((state) => state.guest.books);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <Navbar />
      <div className="w-screen border border-slate-400 flex justify-center">
        {!books ? (
          <div>err</div>
        ) : (
          books.map((book) => {
            return <BookCard data={book} />;
          })
        )}
      </div>
    </>
  );
}
