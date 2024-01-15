import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function AddBooks({session}) {
  const [fetchError, setFetchError] = useState(null);
  const [books, setBooks] = useState(null);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase.from("books").select();

      if (error) {
        setFetchError("Something went wrong");
        setBooks(null);
        console.log(error);
      }

      if (data) {
        setBooks(data);
        setFetchError(null);
      }
    };

    fetchBooks();
  }, []);

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
    }
  };

  return (
    <div className="page">
      {fetchError && <p>{fetchError}</p>}
      {books && (
        <div className="books">
          <div className="books-grid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
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
  );
}
