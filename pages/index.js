import React, { useContext } from "react";
import { Context } from "./context";
import { useRouter } from "next/router";

import axios from "axios";


export default function Auth() {
const {  username, secret, setusername,setsecret}=useContext(Context);

const router=useRouter()
// 24a9e310-5b98-4b58-a24c-975a15ed63ac

function onSubmit(e){
  e.preventDefault();

  if(username.length === 0 || secret.length === 0) return
  axios.put(
    'https://api.chatengine.io/users/',
    {username, secret},
    {headers: {"private-key": "24a9e310-5b98-4b58-a24c-975a15ed63ac" }}
  )
  .then(r=> router.push('/chats'))
}


  return(

    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e)=>onSubmit(e)}>
          <div className="auth-title">Nextjs Chat App</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={e=>setusername(e.target.value)}
            />

          </div>
          <div className="input-container">
            <input
              placeholder="password"
              type='password'
              className="text-input"
              onChange={e=>setsecret(e.target.value)}
            /> 

          </div>
          <button
          type="submit"
          className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  ) 
}
