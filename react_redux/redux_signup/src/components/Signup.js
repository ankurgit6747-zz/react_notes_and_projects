import React from "react";
import { auth, provider } from "../config/firebase";

import {useDispatch, useSelector} from 'react-redux'

import { setActiveUser, setUserLogOutState, selectUserName, selectUserEmail } from "../features/userSlice";

const Signup = () => {

    const dispatch = useDispatch()

    const userName = useSelector(selectUserName)
    // const userEmail = useSelector(selectUserEmail)

    const handleSignIn = () => {
      auth.signInWithPopup(provider).then((result) => {
        dispatch(setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email
        }))
      })
    }

    const handleSignOut = () => {
      auth.signOut().then(() => {
        dispatch(setUserLogOutState)
      }).catch((error) => alert(error.message))
    }

    // const [userName, setUserName] = useState("")
    // const [userEmail, setUserEmail] = useState("")
    // const [userPhone, setUserPhone] = useState("")
    // const [userPassword, setUserPassword] = useState("")

  return (
    <>
      {
        userName ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )
      }
      <div className="control">
        <input
          className="input is-success"
          type="text"
          placeholder="User Name"
          style={{ marginBottom: "10px" }}
          // value={userName}
          // onChange={ e => setUserName(e.target.value)}
        ></input>
        <input
          className="input is-success"
          type="email"
          placeholder="Email"
          style={{ marginBottom: "10px" }}
          // value={userEmail}
          // onChange={ e => setUserEmail(e.target.value)}
        ></input>
        <input
          className="input is-success"
          type="tel"
          placeholder="Mobile"
          style={{ marginBottom: "10px" }}
          // value={userPhone}
          // onChange={ e => setUserPhone(e.target.value)}
        ></input>
        <input
          className="input is-success"
          type="password"
          placeholder="Password"
          style={{ marginBottom: "10px" }}
          // value={userPassword}
          // onChange={ e => setUserPassword(e.target.value)}
        ></input>
      </div>
  
        <button className="button is-success">Submit</button>
    
    </>
  );
};

export default Signup;
