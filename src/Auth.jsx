import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      navigate("/");
    } catch (err) {
      throw err;
    } finally {
      setEmail('')
      setPassword('')
    }

  };

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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="button block" onClick={handleLogin}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
