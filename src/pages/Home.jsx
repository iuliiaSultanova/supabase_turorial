import BookCard from "../BookCard";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Home () {
    const [fetchError, setFetchError] = useState(null);
    const [books, setBooks] = useState(null);

    const handleDelete = (id) => {
        setBooks(prevBooks => {
            return prevBooks.filter(book => book.id !== id)
        })
    }
  
    useEffect(() => {
      const fetchBooks = async () => {
        const { data, error } = await supabase
          .from('books')
          .select()
        
        if (error) {
          setFetchError('Could not fetch the books')
          setBooks(null)
        }
        if (data) {
          setBooks(data)
          setFetchError(null)
        }
      }
  
      fetchBooks()
  
    }, [])
  
    return (
      <div className="page home">
        {fetchError && (<p>{fetchError}</p>)}
        {books && (
          <div className="books">
            <div className="book-grid">
              {books.map(book => (
                <BookCard key={book.id} book={book} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }