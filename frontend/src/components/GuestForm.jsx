// import axios from "axios";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { guestLogin } from "../features/guestSlice";
import { useNavigate } from "react-router-dom";

export default function GuestForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    axios({
      url: "/auth/login",
      method: "POST",
      data: {
        guestName: e.target[0].value,
      },
    })
      .then((data) => {
        dispatch(guestLogin(data.data.name));
        navigate("./home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="guestForm backdrop-sepia-0 bg-white/60 mx-auto rounded-3xl">
      <div className=" w-48 h-10 my-8 mx-16 text-2xl font-bold text-slate-700">
        <i class="fa-solid fa-book-open-reader mx-1"></i>Libraree
      </div>
      <div className="form-container w-1/2 h-3/4 flex flex-col justify-center items-center mx-auto">
        <div className="w-25 my-3 text-stone-700 font-bold text-3xl">
          Online Library
        </div>
        <div className="w-4/5 my-2 text-center text-stone-700 text-xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </div>
        <form
          onSubmit={(e) => {
            login(e);
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            class="input input-bordered input-info w-full max-w-xs my-3 text-stone-600"
            required
          />
          <button
            className="btn btn-outline btn-info mx-auto w-full"
            type="submit"
          >
            Sign me in!
          </button>
        </form>
      </div>
    </div>
  );
}
