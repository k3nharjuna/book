import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WishCard from "../components/WishCard"

export default function Wishlists() {
  const wishlists = useSelector((state) => state.guest.wishlists);
  // const [myWishlists, setMyWishlists] = useState([])

  // useEffect(() => {
  //   console.log(">>>>>>>>",wishlists);
  //   fetchBookId(wishlists)
  // }, [])

  // const fetchBookId = (books) => {
  //     for(let i = 0 ; i < books.length; i++) {
  //       console.log(books[i])
  //       if(books[i]) {
  //         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${books[i]}`)
  //       .then(data => {
  //         console.log("data: ", data.data)
  //         setMyWishlists([...myWishlists, data.data])
  //       })
  //       .catch(err => console.error(err))
  //       }
  //     }
  // }

  return (
    <>
      <Navbar />
      <div className="w-full  flex flex-wrap justify-center ">
        {!wishlists ? (
          <div>err</div>
        ) : (
          wishlists.map((book) => {
            console.log("what is this ",book)
            return <WishCard data={book} />;
          })
        )}
      </div>
    </>
  );
}
