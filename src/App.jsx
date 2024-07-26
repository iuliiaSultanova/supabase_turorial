//import Auth from "./Auth";
//import Account from "./Account";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./supabaseClient";

export default function App() {
  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}
