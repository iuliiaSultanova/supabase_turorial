import { Link } from "react-router-dom";
import supabase from "./supabaseClient";

export default function BookCard({ book, onDelete }) {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("books")
      .delete()
      .eq("id", book.id);

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      onDelete(book.id);
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <div className="rating">{book.rating}</div>
      <div className="buttons">
        <Link to={"/" + book.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
}
