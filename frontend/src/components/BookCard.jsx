import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import noImage from "../assets/no-picture.jpg"
import Swal from "sweetalert2"
import { fetchWishlists } from "../features/guestSlice";

export default function BookCard(props) {
  const guestName = useSelector((state) => state.guest.guestName);
  const wishlists = useSelector((state) => state.guest.wishlists);
  const dispatch = useDispatch()

  useEffect(() => {
    // fetchWishlistsDb()
  }, [])

  const fetchWishlistsDb = () => {
    axios
      .get(`http://localhost:8000/api/books/wishlists/${guestName}`)
      .then((data) => {
        dispatch(fetchWishlists(data.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addWishlist = () => {
    fetchWishlistsDb()
    let isBookExists = false
    wishlists.forEach(bookId => {
      if(bookId === props.data.id) {
        isBookExists = true
      }
    });
    if(isBookExists) {
        Swal.fire('Book Already in your wishlists!')
    } else {
      axios.post("http://localhost:8000/api/books/wishlists", {
        bookId: props.data.id,
        guestName
      })
      .then(data => {
        fetchWishlistsDb()
        Swal.fire({
        title: 'Wishlists added',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      })
    }
    
  }


  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl m-2">
        <figure className="h-48 mt-2">
          <img
            src={props.data.volumeInfo.imageLinks?.thumbnail || noImage}
            alt="cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl text-zinc-500">{props.data.volumeInfo.title}</h2>
          <p>{props.data.volumeInfo.authors || "unknown"}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={addWishlist}>Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}
