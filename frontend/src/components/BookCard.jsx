import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import noImage from "../assets/no-picture.jpg";
import Swal from "sweetalert2";
import { fetchWishlists } from "../features/guestSlice";
import LoveIcon from "./LoveIcon.jsx";
import ReactStars from "react-rating-stars-component";
import axios from "../api/axios";

export default function BookCard(props) {
  const guestName = useSelector((state) => state.guest.guestName);
  const wishlists = useSelector((state) => state.guest.wishlists);
  const dispatch = useDispatch();
  const [star, setStar] = useState(
    props.data.volumeInfo.averageRating
      ? +props.data.volumeInfo.averageRating
      : 0
  );

  useEffect(() => {
    fetchWishlistsDb();
  }, []);

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

  const addWishlist = () => {
    fetchWishlistsDb();
    let isBookExists = false;
    wishlists.forEach((book) => {
      if (book.id === props.data.id) {
        isBookExists = true;
      }
    });
    if (isBookExists) {
      Swal.fire("Book Already in your wishlists!");
    } else {
      let title = props.data.volumeInfo.title;
      let authors = "Unknown";
      let thumbnail = "";
      // let averageRating = 0
      if (
        props.data.volumeInfo.imageLinks &&
        props.data.volumeInfo.imageLinks.thumbnail
      ) {
        thumbnail = props.data.volumeInfo.imageLinks.thumbnail;
      }
      if (props.data.volumeInfo.authors) {
        authors = props.data.volumeInfo.authors;
      }
      // if(props.data.volumeInfo.averageRating) {
      //   averageRating = props.data.volumeInfo.averageRating
      // }

      axios
        .post("/books/wishlists", {
          bookId: props.data.id,
          guestName,
          title,
          authors,
          thumbnail,
          averageRating: star,
        })
        .then((data) => {
          fetchWishlistsDb();
          Swal.fire({
            title: "Wishlists added",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    }
  };

  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl m-2">
        <figure className="h-48 mt-2">
          <img
            src={props.data.volumeInfo.imageLinks?.thumbnail || noImage}
            alt="cover"
          />
        </figure>
        <div className="mx-auto my-1 flex justify-center items-center">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={star}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="card-body">
          <h2 className="text-xl text-zinc-500">
            {props.data.volumeInfo.title}
          </h2>
          <p>{props.data.volumeInfo.authors || "unknown"}</p>
          <div className="card-actions justify-end">
            <button className="" onClick={addWishlist}>
              <LoveIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
