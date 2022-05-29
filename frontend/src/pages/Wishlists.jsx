import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import WishCard from "../components/WishCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlists() {
  const wishlists = useSelector((state) => state.guest.wishlists);
  const guestName = useSelector((state) => state.guest.guestName);
  let navigate = useNavigate();

  useEffect(() => {
    isLogin();
  }, []);

  const isLogin = () => {
    if (!guestName) {
      navigate("/", { replace: true });
    }
  };

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
