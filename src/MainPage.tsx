import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { supabase } from './supabaseClient';

export default function MainPage() {
  const Logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

    return (
        <nav>
          <h1>本棚</h1>
          <Link to="/">Home</Link>
          <Link to="/create">本を追加</Link>
          <Link to="/sandbox">sandbox</Link>
          <Link to="/logout" onClick={Logout}>logout</Link>
        </nav>
    );
  }