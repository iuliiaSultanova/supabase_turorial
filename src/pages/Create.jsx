import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

export default function Create() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !rating) {
      setFormError("Fill in all the fields");
      return;
    }

    const { data, error } = await supabase
      .from("books")
      .insert([{ title, rating }])
      .select();

    if (error) {
      console.log(error);
      setFormError("Fill in all the fields");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate('/');
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>本を追加する</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}
