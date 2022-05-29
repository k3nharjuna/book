import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../features/guestSlice";
import { useState } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const name = useSelector((state) => state.guest.guestName);
  const books = useSelector((state) => state.guest.books);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const location = useLocation();

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  let goToPage = "";

  if (location.pathname === "/home") {
    goToPage = "/wishlists";
  } else if (location.pathname === "/wishlists") {
    goToPage = "/home";
  }

  function goTo() {
    navigate(goToPage, { replace: true });
  }

  function findBooks() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((data) => {
        dispatch(fetchBooks(data.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onEnterSearch(e) {
    e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((data) => {
        dispatch(fetchBooks(data.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="navbar bg-base-100 border border-t-slate-400">
        <div className="flex-1">
          <div
            className="btn btn-ghost normal-case text-xl text-slate-600"
            onClick={goTo}
          >
            {goToPage.slice(1, goToPage.length - 1)[0].toUpperCase() +
              goToPage.slice(2, goToPage.length)}
          </div>
        </div>
        {location.pathname !== "/home" ? (
          <></>
        ) : (
          <div className="flex-none gap-2">
            <div className="form-control">
              <form onSubmit={(e) => onEnterSearch(e)}>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                  onChange={(e) => handleInputChange(e)}
                  autoFocus
                />
              </form>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full" onClick={findBooks}>
                  <i className="fa-solid fa-magnifying-glass mt-3"></i>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
