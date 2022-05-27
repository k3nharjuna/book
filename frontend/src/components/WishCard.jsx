import noImage from "../assets/no-picture.jpg";

export default function WishCard(props) {
  return(
    <>
    
      <div className="card w-72 bg-base-100 shadow-xl m-2">
        <figure className="h-48 mt-2">
          <img
            src={props.data.thumbnail || noImage}
            alt="cover"
          />
        </figure>
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