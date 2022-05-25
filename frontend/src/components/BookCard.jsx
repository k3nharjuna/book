import { useState } from "react";

export default function BookCard(props) {
  const [authors, setAuthors] = useState("");
  //   console.log(props.data.volumeInfo);
  //   if (props.book.volumeInfo.authors) {
  //     setAuthors(props.book.volumeInfo.authors[0]);
  //   } else {
  //     setAuthors("Unknown");
  //   }
  console.log(props.data.volumeInfo.title);

  return (
    <>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.book.volumeInfo.title}</h2>
          <p>{}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </>
  );
}
