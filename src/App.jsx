import { supabase } from "./supabaseClient";
import { useState } from "react";
import React from "react";
import MainPage from "./mainPage";
//import { Auth } from '@supabase/auth-ui-react'
//import { ThemeSupa } from '@supabase/auth-ui-shared'
import CustomAuth from "./Auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleEmail = (state) => {
    console.log("email received state", state)
    setEmail(state);
  }

  const handlePassword = (state) => {
    setPassword(state);
  }

  supabase.auth.onAuthStateChange( async (event) => {
    if (event === "SIGNED_IN") {
      setSignedIn(true);
    } else if (event === "SIGNED_OUT") {
      setSignedIn(false);
    }
  })

  const signUpNewUser = async (event) => {
    event.preventDefault();
    console.log("someone signed up");
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
  };

  const logout = async (event) => {
    event.preventDefault();
    console.log("someone logged out");
    try {
      const { error } = await supabase.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    console.log("someone signed in");
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="mt-30">
      {!signedIn ? (
        <CustomAuth
          signUpNewUser={signUpNewUser}
          email={email}
          handleEmail={handleEmail}
          password={password}
          handlePassword={handlePassword}
          signIn={signIn}
          signUp={signUpNewUser} />
      ) : (
        <MainPage logout={logout} />
      )}
    </div>
  );
}