import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import WishCard from "../components/WishCard";

export default function Wishlists() {
  const wishlists = useSelector((state) => state.guest.wishlists);

  return (
    <>
      <Navbar />
      <div className="w-full  flex flex-wrap justify-center ">
        {!wishlists ? (
          <div>err</div>
        ) : (
          wishlists.map((book) => {
            return <WishCard data={book} />;
          })
        )}
      </div>
    </>
  );
}
