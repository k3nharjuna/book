import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../features/guestSlice";
import { useState } from "react";
import axios from "axios";
import { matchRoutes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

  console.log(location.path);
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
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full" onClick={findBooks}>
                <i className="fa-solid fa-magnifying-glass mt-3"></i>
              </div>
            </label>
            {/* <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">{name}</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
