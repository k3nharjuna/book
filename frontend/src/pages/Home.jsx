import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import BookCard from "../components/BookCard";
import { useEffect } from "react";
import { fetchWishlists } from "../features/guestSlice";
import { useNavigate } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import axios from "../api/axios";

export default function Home() {
  const books = useSelector((state) => state.guest.books);
  const guestName = useSelector((state) => state.guest.guestName);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    fetchWishlistsDb();
    isLogin();
  }, []);

  //login info is saved in redux, so if we refresh the page > the login info saved in redux will gone and we need to login as guest again
  const isLogin = () => {
    if (!guestName) {
      navigate("/", { replace: true });
    }
  };

  const fetchWishlistsDb = () => {
    axios
      .get(`/books/wishlists/${guestName}`)
      .then((data) => {
        dispatch(fetchWishlists(data.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full  flex flex-wrap justify-center ">
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
