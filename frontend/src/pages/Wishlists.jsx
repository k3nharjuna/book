import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Wishlists() {
  const wishlists = useSelector((state) => state.guest.wishlists);

  return (
    <>
      <Navbar />
    </>
  );
}
