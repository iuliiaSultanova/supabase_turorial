import supabase from "../supabaseClient";
import { useState, useEffect } from "react";

export default function Sandbox() {
  const [titles, setTitles] = useState(null);

  useEffect(() => {
    const fetchTitles = async () => {
      const { data, error } = await supabase.rpc("get_titles").select();

      if (error) {
        console.log("oops! something went wrong");
        console.log(error);
        setTitles(null);
      }

      if (data) {
        console.log("success!");
        console.log(data);
        setTitles(data);
      }
    };

    fetchTitles();
  }, []);

  return (
    <div className="page">
      {titles.map((title) => (
        <p>{title}</p>
      ))}
    </div>
  );
}
