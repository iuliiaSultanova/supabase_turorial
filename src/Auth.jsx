//import { useState } from "react";
//import { supabase } from "./supabaseClient";

import { useState } from "react";

export default function CustomAuth({
  email,
  handleEmail,
  password,
  handlePassword,
  signUp,
  signIn,
}) {
  console.log("email and password", email, password);
  const [isUser, setIsUser] = useState(false);
  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <form className="form-widget">
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => handleEmail(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => handlePassword(e.target.value)}
            />
          </div>
          <div className="btn-container">
            {!isUser ? (
              <>
                <button className="button block" onClick={signUp}>
                  Sign up
                </button>
                <span onClick={() => setIsUser(true)} className="text-center">
                  Already signed up? Sign in
                </span>
              </>
            ) : (
              <button className="button block" onClick={signIn}>
                Sign in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
