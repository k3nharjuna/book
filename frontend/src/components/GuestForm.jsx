import axios from "axios";
import { useState } from 'react'

export default function GuestForm () {

  const [guestName, setGuestName] = useState("")


  const login = async (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    axios({
      url: "http://localhost:5000/api/auth/login",
      method: "POST",
      data: {
        guestName: e.target[0].value
      }
    })
    .then(data => {
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return(
    <div className="guestForm backdrop-sepia-0 bg-white/60 mx-auto rounded-3xl">
      <div className=" w-48 h-10 my-8 mx-16 text-2xl font-bold text-slate-700"><i class="fa-solid fa-book-open-reader mx-1"></i>Libraree</div>
      <div className="form-container w-1/2 h-3/4 flex flex-col justify-center items-center mx-auto">
        <div className="w-25 my-3">Online Library</div>
        <div className="w-4/5 my-2 text-center">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
        <form onSubmit={ (e) => {login(e)}}>
          <input type="text" placeholder="Your name" class="input input-bordered input-info w-full max-w-xs my-3" required/>
          <button class="btn btn-outline btn-info mx-auto" type="submit">Sign me in!</button>
        </form>
      </div>
    </div>
  )
}