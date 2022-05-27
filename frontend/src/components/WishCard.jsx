import noImage from "../assets/no-picture.jpg";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

export default function WishCard(props) {
  const [star, setStar] = useState(props.data.averageRating)
  return(
    <>
      <div className="card w-72 bg-base-100 shadow-xl m-2">
        <figure className="h-48 mt-2">
          <img
            src={props.data.thumbnail || noImage}
            alt="cover"
          />
        </figure>
        <div className="mx-auto my-1 flex justify-center items-center">
          <ReactStars
            count={5}
            value={star}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="card-body">
          <h2 className="text-xl text-zinc-500">
            {props.data.title}
          </h2>
          <p>{props.data.authors || "unknown"}</p>
          
        </div>
      </div>
    </>
  )
}